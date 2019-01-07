const BoxSDK = require('box-node-sdk');
const fs = require('fs');
const path = require('path');
const baseUrl = 'https://api.box.com/2.0/';

const boxConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../../config/config.json')));
let sdk = new BoxSDK({
	clientID: 'jde6gplgvnq8qimaxs5ygt1wkiysnota', // client IDs aren't private
	clientSecret: 'dummy2' // No client secret used for auth
});
let client = sdk.getBasicClient(boxConfig.boxViewToken);

const getDownToken = async (fileId, options) => {
  try {
    let token = await client.exchangeToken(['base_preview', 'annotation_edit', 'item_download'], `${baseUrl}files/${fileId}`, options);
    return token.accessToken;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

module.exports = {getDownToken};
