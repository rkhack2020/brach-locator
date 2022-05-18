let express = require('express');
let app = express();
let appService =  require('./app.service');

appService.connectToDatabase();
appService.setAppMiddleware(app);
appService.apiSetUp(app);
appService.errorHandler404(app);

module.exports = app;