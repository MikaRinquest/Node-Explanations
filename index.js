let http = require("http");
//Creates the webpage
http
  .createServer(function (request, response) {
    //   Equivalent of the header in an html
    //   The number is the status of the server(like error 404). 200 means everything is okay
    //   Content-Type : text/plain  = is how the text will appear in the browser
    response.writeHead(200, { "Content-Type": "text/html" });

    //   What shows up in the browser
    response.end("The server worketh");
  })

  // What to type in the browser to find the page
  .listen(8081);
console.log("Server is up and running at 8081");

//Imports module from another file.(./ log is the directory)
// let myLogModule = require("./log");
// myLogModule is the variable containing the module, while .info is which message to play
// myLogModule.info("Node.js started");

let message = require("./log");
message.log("Hello World");

let msg = require("./message");
console.log(msg); //because what we're exporting is a string and not a function, we type in msg [the variable] into a console.log
console.log(msg.SimpleMessage); //If .SimpleMessage is not also in the bracket, then the entire object will appear in the console
//Cannot run both a string and an object at the same, therefore the object will appear as undefined

let person = require("./data");
console.log(person.firstname + " " + person.lastname);
