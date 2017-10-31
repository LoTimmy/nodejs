var winston = require("winston");
var moment = require("moment");

// winston.add(winston.transports.File, { filename: "somefile.log" });
winston.add(winston.transports.File, {
  filename: "somefile.log",
  timestamp: () => moment().format()
});
winston.remove(winston.transports.Console);

winston.log("info", "Hello distributed log files!");
winston.info("Hello again distributed logs");
