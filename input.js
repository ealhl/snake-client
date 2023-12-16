let connection;

const handleUserInput = function (data) {
  // process.stdout.write(".");
  // your code here
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "d") {
    connection.write("Move: right");
  }

  if (data === "x") {
    connection.write("Say: eat");
  }

  if (data === "\u0003") {
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };
