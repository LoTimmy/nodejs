const io = require("socket.io-client");
const socket = io("http://localhost:7000");
var moment = require("moment");

socket.on("connect", () => {
  console.log(socket.id);
  socket.emit("chat message", "hi");
});

socket.on("chat message", msg => {
  console.log("message: " + msg);
});

socket.on("hi", msg => {
console.log(msg);
});

socket.on("disconnect", () => {
  console.log("disconnect");
});
