const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/404.html")
});

app.use(express.static(__dirname + "/public/changelog"), (_, res, next) => {
  res.sendFile(__dirname + "./public/changelog/index.html")
});
app.use(express.static(__dirname + "/public/bot"), (_, res, next) => {
  res.sendFile(__dirname + "./public/bot/index.html")
});
app.use(express.static(__dirname + "/public/discord"), (_, res, next) => {
  res.sendFile(__dirname + "./public/discord/index.html")
});
app.use(express.static(__dirname + "/public/whatsapp"), (_, res, next) => {
  res.sendFile(__dirname + "./public/whatsapp/index.html")
});
app.use(express.static(__dirname + "/public/linktree"), (_, res, next) => {
  res.sendFile(__dirname + "./public/linktree/index.html")
});
app.use(express.static(__dirname + "/public/instagram"), (_, res, next) => {
  res.sendFile(__dirname + "./public/instagram/index.html")
});

app.listen(8080);