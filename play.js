// play.js
const { connect } = require("./client");
console.log("Connecting ...");
connect();

// connect().on("Move: up", function(){

// });

// connect().on("Name:AKA", function(){

// });

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
};

setupInput();
