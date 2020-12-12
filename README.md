# Simple Snowpack app from scratch

See https://www.snowpack.dev/tutorials/getting-started for more details.

Create app directory:
```bash
mkdir snowpack-app
cd snowpack-app
```

Initialize the project:
```bash
yarn init --yes
yarn add --dev snowpack
yarn run snowpack init
```

Add `snowpack` commands to `package.json`:
```json
...
"scripts": {
  "start": "snowpack dev",
  "build": "snowpack build"
}
...
```

Enable Snowpack's built-in optimization pipeline in `snowpack.config.js`:
```json
...
module.exports = {
  ...
  "experiments": {
    "optimize": {
      "bundle": true,
      "minify": true,
      "target": 'es2018'
    }
  }
};
...
```

Install the `canavas-confetti` package:
```bash
yarn add canvas-confetti
```

Create a `hello-world.js`:
```js
export function helloWorld() {
  console.log('Hello World!');
}
```

Create an `index.js`:
```js
import { helloWorld } from './hello-world.js';
import confetti from 'canvas-confetti';

helloWorld();

confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });
```

Create an `index.css`:
```css
body {
  font-family: sans-serif;
}
```

Create an `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Starter Snowpack App" />
    <link rel="stylesheet" type="text/css" href="/index.css" />
    <title>Starter Snowpack App</title>
  </head>
  <body>
    <h1>Welcome to Snowpack!</h1>
    <script type="module" src="/index.js"></script>
  </body>
</html>
```

Start the Snowpack development server:
```bash
yarn run start
```

Point your browser to http://localhost:8080/.

Build for production/deployment:
```bash
yarn run build
```

Deploy the Snowpack project from `build` directory.
