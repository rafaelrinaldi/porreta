# porreta [![Build Status](https://travis-ci.org/rafaelrinaldi/porreta.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/porreta)

> Get funny words in Brazilian Portuguese.

<sup>Inspired by [`superb`](http://github.com/sindresorhus/superb)</sup>

## Install

```sh
$ npm install porreta --save
```

## Usage

```javascript
var porreta = require('porreta');

porreta(); // pamonha
porreta(); // cangote

porreta.words; // ['alpendre', 'arapuca', 'araraquara', ...]
```

## API

## `porreta()`

Type: `string`  

Random funny word.

## `porreta.words`

Type: `array`  

All the words.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
