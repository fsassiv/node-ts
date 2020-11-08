"use strict";
exports.__esModule = true;
var express_1 = require("express");
var helmet_1 = require("helmet");
var morgan_1 = require("morgan");
var PORT = process.env.PORT || 3000;
var app = express_1["default"]();
app.use(helmet_1["default"]());
app.use(morgan_1["default"]('tiny'));
app.get('/', function (_req, res) {
    res.send('Hello World!').status(200);
});
app.listen(PORT, function () {
    console.log("Server is running on PORT " + PORT + ". API endpoint http://localhost:3000");
});
