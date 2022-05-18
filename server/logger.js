const log4js = require('log4js');

log4js.configure({
    appenders: { bank: { type: "file", filename: "./logs/bank.log" } },
    categories: { default: { appenders: ["bank"], level: "debug" } }
  });
const logger = log4js.getLogger();

module.exports = logger;