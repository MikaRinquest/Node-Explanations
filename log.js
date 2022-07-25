let log = {
  info: function (info) {
    console.log("Info " + info);
  },
  warning: function (warning) {
    console.log("Warning " + warning);
  },
  error: function (error) {
    console.log("Error " + error);
  },
};
//Allows this file to be loaded into other files as a node module
// module.exports = log;

module.exports.log = function (message) {
  console.log(message);
};
