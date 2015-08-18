'use strict';

var porreta = require('./');
var test = require('tape');

test('returns a random porreta word', function(t) {
  t.ok(porreta().length, 'check if there are items on the list');
  t.end();
});

test('return all the words', function(t) {
  t.ok(Array.isArray(porreta.words), 'check if words are an array');
  t.ok(porreta.words[10].length, 'check if words index 10 has content');
  t.end();
});
