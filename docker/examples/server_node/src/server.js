const express = require("express");
const app = express();
const port = 3000;
const MAX_ITER = 1000;

const mandelbrot = (width, height) => {
  out = "";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let x0 = (i / height) * 2.47 - 2.0;
      let y0 = (j / width) * 2.24 - 1.12;
      let x = 0;
      let y = 0;
      let iter = 0;
      while (x * x + y * y < 2 * 2 && iter < MAX_ITER) {
        let xtemp = x * x - y * y + x0;
        y = 2 * x * y + y0;
        x = xtemp;
        iter++;
      }
      if (iter == MAX_ITER) out += "*";
      else out += "&nbsp;&nbsp;";
    }
    out += "<br>";
  }
  return out;
};

app.get("/", (req, res) => {
  res.send(mandelbrot(60, 40));
});

app.get("/:width/:height", (req, res) => {
  let height = req.params.height;
  if (!height) height = 40;
  let width = req.params.width;
  if (!width) width = 60;
  res.send(mandelbrot(width, height));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
