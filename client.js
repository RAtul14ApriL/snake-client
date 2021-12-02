const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on('connect', (connect) => {
    console.log('King Cobra', connect);
    conn.write("Name: RAT");
  })
  return conn;
}

module.exports = connect;