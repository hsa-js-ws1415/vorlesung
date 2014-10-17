var fs = require("fs");

fs.readFile("./function-stack-trace.js", "utf8", function () {
    // ...

    throw new Error();
});