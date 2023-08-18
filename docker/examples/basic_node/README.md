# Usage

## Version using bigger node container

`docker run -it --entrypoint bash -v ./src:/app  node:current`

## Version with smaller Alpine container

`docker run -it -v ./src:/app node:current-alpine3.17 /app/mandelbrot.js`
