var _ = require('lodash');
var words = require('../words');

function sort() {
  return _.sortBy(_.uniq(words));
}

function write() {
  var data = JSON.stringify(sort(), null, '  ');
  process.stdout.write(data);
}

write();
