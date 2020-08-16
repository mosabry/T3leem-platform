const staticServer = require("static-server");
var server = new staticServer({
    rootPath: "./dist/",
    port: 8888,
});

server.start(function () {
    console.log(
        "Hello Developer 🍔, Server is listening to",
        `http://localhost:${server.port}`,
    );
});
