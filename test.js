'use strict';

var porreta = require('./');
var test = require('tape');
var nonAscii = require('non-ascii');

test('returns a random porreta word', function(t) {
  t.ok(porreta().length, 'check if there are items on the list');
  t.end();
});

test('return all the words', function(t) {
  t.ok(Array.isArray(porreta.words), 'check if words are an array');
  t.ok(porreta.words[1].length, 'check if words index 1 has content');
  t.end();
});

test('test for non-ascii characters', function(t) {
  var words = porreta.words;
  var shouldReport = words.some(function(word) {
    return nonAscii.test(word);
  });

  t.ok(!shouldReport, 'should report if there are non-ascii characters');
  t.end();
});

test('test for unique words', function(t) {
  var words = [];
  var duplicates = [];

  porreta.words.forEach(function(word) {
    if(~words.indexOf(word)) {
      duplicates.push(word);
    }

    words.push(word);
  });

  t.ok(duplicates.length === 0, 'words must be unique');
  t.end();
});
