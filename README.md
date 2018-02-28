# Three.js / First person controls

[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

**First person controls** written in **ES6** for [**Three.js**](http://threejs.org/) as UMD.

## Installation

```bash
npm install --save first-person-controls
```

## Usage

#### ES6
```javascript
import FirstPersonControls from 'first-person-controls'

const controls = new FirstPersonControls(camera)
controls.lookSpeed = 0.1
controls.movementSpeed = 10

const clock = new THREE.Clock(true)

const render = () => {
  requestAnimationFrame(render)

  controls.update(clock.getDelta())
}

render()
```

#### ES5
```javascript
var THREE = require('three');
var FirstPersonControls = require('first-person-controls');

var controls = new FirstPersonControls(camera);
controls.lookSpeed = 0.1;
controls.movementSpeed = 10;

var clock = new THREE.Clock(true);

var render = function() {
  requestAnimationFrame(render);

  controls.update(clock.getDelta());
};

render();
```

## License

MIT © [Mr.doob](http://mrdoob.com/), [AlteredQualia](http://alteredqualia.com/) and [Paul Irish](http://paulirish.com/).

[npm-image]: https://badge.fury.io/js/first-person-controls.svg
[npm-url]: https://npmjs.org/package/first-person-controls
[daviddm-image]: https://david-dm.org/first-person-controls.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/first-person-controls
