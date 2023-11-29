const server = require("./src/app")();
const { env } = require("./config/config");

server.get("/", (req, res) => {
  res.send("HELLO!");
});

server.listen(env.port, env.host, () =>
  console.log(`Listen on ${env.host}:${env.port}`)
);
