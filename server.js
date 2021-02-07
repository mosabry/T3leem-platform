const StaticServer = require("static-server");
const server = new StaticServer({
    rootPath: "./dist/",
    port: 8888,
});

server.start(function () {
    console.log(
        "Hello Developer 🍔, Server is listening to",
        `http://localhost:${server.port}`,
    );
});
