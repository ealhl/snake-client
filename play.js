const net = require("net");

// establishes a connection with the game server
const connect  = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text

  conn.on("event name", () => {
    // code that does something
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
  });
  conn.on("data", (data) => {
    console.log(data.toString());
  });

  return conn;
};


module.exports = { connect };
