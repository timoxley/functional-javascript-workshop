const Promise = require('bluebird');
/* 
Example using `Functional Promises` - removes side-effects, extra logical branching and mutable array usage.
*/
module.exports = function loadUsers(userIds, load) {
  load = Promise.promisify(load);
  return Promise
    .resolve(userIds)
    .map(id => load(id));
}

