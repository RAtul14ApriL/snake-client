const { moveKeys, inGameMsg } = require('./constants');
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === moveKeys.up) {
    connection.write("Move: up");
  }
  if (key === moveKeys.left) {
    connection.write("Move: left");
  }
  if (key === moveKeys.down) {
    connection.write("Move: down");
  }
  if (key === moveKeys.right) {
    connection.write("Move: right");
  }
  if (key === 'e') {
    connection.write(`Say: ${inGameMsg.e}`);
  }
  if (key === 'f') {
    connection.write(`Say: ${inGameMsg.f}`);
  }
  if (key === 'g') {
    connection.write(`Say: ${inGameMsg.g}`);
  }
  if (key === 'q') {
    connection.write(`Say: ${inGameMsg.q}`);
  }
  if (key === 'r') {
    connection.write(`Say: ${inGameMsg.r}`);
  }
};

module.exports = setupInput;