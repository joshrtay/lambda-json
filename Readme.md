
# lambda-json

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert JSON with embedded functions to static JSON.

## Installation

    $ npm install lambda-json

## Usage

```js
var lambdaJSON = require('lambda-json')

var obj = {
  foo: {
    bar: (props) => props.bar
  }
}

lambdaJSON(obj, {bar: ''woot}) // => {foo: {bar: 'woot'}}
```

## API

### lambdaJSON(obj, props)

- `obj` - The lambda json object.
- `props` - Properties to embedded functions or generators.

**Returns:** The computed plain JSON.

## License

MIT

[travis-image]: https://img.shields.io/travis/joshrtay/lambda-json.svg?style=flat-square
[travis-url]: https://travis-ci.org/joshrtay/lambda-json
[git-image]: https://img.shields.io/github/tag/joshrtay/lambda-json.svg?style=flat-square
[git-url]: https://github.com/joshrtay/lambda-json
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/lambda-json.svg?style=flat-square
[npm-url]: https://npmjs.org/package/lambda-json
