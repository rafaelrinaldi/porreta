# porreta

[![Build Status](https://travis-ci.org/rafaelrinaldi/porreta.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/porreta)
[![Dependencies Status](https://david-dm.org/rafaelrinaldi/porreta.svg)](https://david-dm.org/rafaelrinaldi/porreta)

> Get funny words in Brazilian Portuguese.

<sup>Inspired by [`superb`](http://github.com/sindresorhus/superb)</sup>

:warning: "porreta" is a word commonly used on the northeast of Brazil to indicate something that is awesome.

Currently `169` words available.

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
