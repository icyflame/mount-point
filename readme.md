# mount-point [![Build Status](http://img.shields.io/travis/kevva/mount-point.svg?style=flat)](https://travis-ci.org/kevva/mount-point)

> Get the [mount point](http://en.wikipedia.org/wiki/Mount_%28computing%29) for a file


## Install

```
$ npm install --save mount-point
```
**Note:** This package has a [scoped package](https://docs.npmjs.com/misc/scope) as it's dependency, and hence, [is not compatible](https://twitter.com/othiym23/status/593653282272194560) with npm 1.x. ([#2](https://github.com/kevva/mount-point/issues/2))  
**Solution:** Upgrade npm using `npm install -g npm@latest`.


## Usage

```js
var mountPoint = require('mount-point');

mountPoint('foo.tar.gz', function (err, mount) {
	console.log(mount);
	//=> '/'
});
```


## Related

* [df](https://github.com/sindresorhus/df) - Get free disk space info from `df -kP`


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
