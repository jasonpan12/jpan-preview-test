// Load in libs
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const BoxSDK = require('box-node-sdk');
const fs = require('fs');
const {getDownToken} = require('./utils/downscopeToken'); // helper function to generate a downscoped token

// Set constants
const port = process.env.PORT || 3000;
const viewsPath = path.join(__dirname, '../views');
const partialsPath = path.join(__dirname, '../views/partials');

// Instantiate classes and create client
const boxConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/config.json')));
let sdk = new BoxSDK({
	clientID: 'jde6gplgvnq8qimaxs5ygt1wkiysnota', // client IDs aren't private
	clientSecret: 'dummy2' // No client secret used for auth
});
let client = sdk.getBasicClient(boxConfig.boxViewToken);

// Set up express
let app = express();
app.use(express.static(__dirname + '/public')); // Don't really need this yet
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.get('/', async (req, res) => {
  // TODO: abstract and generalize each of these
	let {fileId} = boxConfig;
	let downTokenOptions = {
		actor: {
			id: '1234',
			name: 'Jason'
		}
	};

  try {
    const token = await getDownToken(fileId, downTokenOptions);
    res.render('home.hbs', {token,fileId});
  } catch (e) {
    res.send(e);
  }
});

// Listen
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
