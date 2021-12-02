const {connect} = require('./client');

console.log("Connecting ...");
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w'){
    process.stdin("Move: up");
  }
  if (key === 's'){
    process.stdin("Move: down");
  }
  if (key === 'a'){
    process.stdin("Move: left");
  }
  if (key === 'd'){
    process.stdin("Move: right");
  }
};