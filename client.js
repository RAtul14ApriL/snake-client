const net = require('net');
const { IP, PORT, playerName, connectMessage } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on('connect', (connect) => {
    console.log(connectMessage, connect);
    conn.write(`Name: ${playerName}`);
  })
  return conn;
}

module.exports = connect;