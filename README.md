# jpan-preview-test
A quick Node.JS PoC for the Box UI Elements + Express + Handlebars

# Introduction
This app serves up a single simple HTML page, created by Handlebars. The purpose of this app is to demonstrate:
* Safely downscoping a Box access token server-side and passing it to the client javascript
* Ease of use and versatility with [Content Preview](https://developer.box.com/docs/box-content-preview)
* Running a local web server with Express and Handlebars

# Usage
Assuming that the prerequisites are filled, follow these steps in order:
1. Clone the repository to a local directory
1. Run `npm install`
1. In the config folder, fill in the config file with the proper values for `boxViewToken` and `fileId`
1. When running `node server/server.js`, the app is visible from `localhost:3000`

# Prerequisites
* A [Box View](https://developer.box.com/docs/box-view) Token, obtained from an "App Auth" app
* Node.JS
