const express = require("express");
const qr = require("qr-image");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./folder");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index.ejs", { qrCode: null, text: "" });
});

app.post("/generate", function (req, res) {
  const text = req.body.text;
  if (!text) return res.redirect("/");

  const qr_svg = qr.imageSync(text, { type: "png" });
  const qrBase64 = "data:image/png;base64," + qr_svg.toString("base64");

  res.render("index.ejs", { qrCode: qrBase64, text });
});

app.listen(4000, function () {
  console.log("Server on");
});
