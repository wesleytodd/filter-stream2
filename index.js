var through2 = require('through2');

function generateFilterFunc (filter) {
	return function (chunk, enc, done) {
		filter.call(this, chunk, enc, function (shouldPass) {
			if (shouldPass) {
				this.push(chunk);
			}
			done();
		}.bind(this));
	};
}

function generateSyncFilterFunc (filter) {
	return function (chunk, enc, done) {
		if (filter.call(this, chunk, enc)) {
			this.push(chunk);
		}
		done();
	};
}

module.exports = function (filter, flush) {
	return through2(generateFilterFunc(filter), flush);
};

module.exports.obj = function (filter, flush) {
	return through2.obj(generateFilterFunc(filter), flush);
};

module.exports.sync = function (filter, flush) {
	return through2(generateSyncFilterFunc(filter), flush);
};

module.exports.objSync = function (filter, flush) {
	return through2.obj(generateSyncFilterFunc(filter), flush);
};
