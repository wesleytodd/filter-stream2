# Filter A Stream Of Data

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg)](https://github.com/JedWatson/happiness)

[npm-image]: https://img.shields.io/npm/v/filter-stream2.svg
[npm-url]: https://npmjs.org/package/filter-stream2
[downloads-image]: https://img.shields.io/npm/dm/filter-stream2.svg
[downloads-url]: https://npmjs.org/package/filter-stream2

## Install

```
$ npm install --save filter-stream2
```

## Usage

```javascript
var filterStream = require('filter-stream2');

createAReadStream().pipe(filterStream(function (chunk, enc, done) {
	// Some test on the chunk
	if (chunk.indexOf('some string i am looking for ...?') !== -1) {
		// Pass this chunk downstream
		return done(true);
	}

	// Otherwise dont pass this chunk down
	done(false);
}));

// Other methods
filterStream.sync(); // Just a sync version where you return true/false
filterStream.obj(); // Object stream version
filterStream.objSync(); // Sync version of object stream
```
