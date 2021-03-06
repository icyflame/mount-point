'use strict';

var test = require('ava');
var mountPoint = require('./');

test('return mount point for a file', function (t) {
	t.plan(2);

	mountPoint('index.js', function (err, data) {
		t.assert(!err, err);
		t.assert(data === '/', data);
	});
});

test('return custom error when file doesn\'t exist', function (t) {
	t.plan(2);

	mountPoint('non-existant-file', function (err) {
		t.assert(err, err);
		t.assert(err.code, 'ENOENT', err.code);
	});
});
