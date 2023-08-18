const WIDTH = 64;
const HEIGHT = 32;
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
      else out += " ";
    }
    out += "\n";
  }
  return out;
};

let set = mandelbrot(WIDTH, HEIGHT);
console.log(set);
