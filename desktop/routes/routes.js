
var express = require("express");
var routers = require("./routers");
var api = express.Router();

api.use("/book",routers.BookRouter);
api.use("/article",routers.ArticleRouter);
api.use("/reader",routers.ReaderRouter);
api.use("/papers",routers.PapersRouter);
api.use("/magazines",routers.MagazinesRouter);

module.exports = api;
