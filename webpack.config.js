const path = require("path");

module.exports = {
    entry: "./resources/scripts/main.js",
    output: {
        path: path.resolve(__dirname, "resources/dist/scripts"),
        filename: "Scripts.js"
    }
}
