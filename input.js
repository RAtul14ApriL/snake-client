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
    connection.stdin("Move: up");
  }  
  if (key === 'a'){
    connection.stdin("Move: left");
  }
  if (key === 's'){
    connection.stdin("Move: down");
  }
  if (key === 'd'){
    connection.stdin("Move: right");
  }
};

modules.exports = {setupInput};