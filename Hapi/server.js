"use strict";

const Hapi = require("hapi");
const SocketIO = require("socket.io");

const server = new Hapi.Server();
console.log(server.version);

server.connection({ address: "0.0.0.0", port: 9000, labels: "admin" });
server.connection({ address: "0.0.0.0", port: 3000, labels: "api" });
server.connection({ address: "0.0.0.0", port: 7000, labels: "backend" });
server.connection({ address: "0.0.0.0", port: 8000, labels: "webserver" });

const admin = server.select("admin");
const api = server.select("api");
const backend = server.select("backend");
const webserver = server.select("webserver");

const io = SocketIO.listen(backend.listener);
io.sockets.on("connection", socket => {
  console.log("a user connected");

  socket.on("chat message", msg => {
    console.log("message: " + msg);
    socket.emit("chat message", "welcome");
  });

  socket.broadcast.emit("hi", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  io.clients((error, clients) => {
    if (error) throw error;
    console.log(clients);
  });
});

api.route([
  { method: "GET", path: "/", handler: (request, reply) => reply("api index") }
]);

admin.route({
  method: "GET",
  path: "/test",
  handler: (request, reply) => {
    reply("test passed");
  }
});

const home = (request, reply) => {
  return reply("<h1>Hello world</h1>");
};

webserver.route([
  { method: "GET", path: "/", handler: home },
  { method: "GET", path: "/example", handler: (request, reply) => reply("ok") }
]);

server.start(err => {
  if (err) {
    throw err;
  }

  console.log(`listening on *:${server.connections[0].info.port}`);
  console.log(`listening on *:${server.connections[1].info.port}`);
  console.log(`listening on *:${server.connections[2].info.port}`);
  console.log(`listening on *:${server.connections[3].info.port}`);
});
