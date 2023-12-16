const net = require("net");

// establishes a connection with the game server
const connect = () => {
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
    console.log("Successfully connected to game server");
    conn.write("Name: LHL");
  });

  // conn.on("connect", () => {
  //   // code that does something when the connection is first established
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 5000);
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 6000);
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 7000);
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 8000);
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 9000);
  //   setTimeout(() => {
  //     conn.write("Move: right");
  //   }, 10000);
  // });

  conn.on("data", (data) => {
    console.log(data.toString());
  });

  return conn;
};

module.exports = { connect };
