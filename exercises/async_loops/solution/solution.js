const Promise = require('bluebird');

module.exports = function loadUsers(userIds, load) {
  load = Promise.promisify(load); // could be eliminated
  return Promise.resolve(userIds)
    .map(id => load(id));
}
