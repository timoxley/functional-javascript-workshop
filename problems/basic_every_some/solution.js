module.exports = function checkUsersValid(users) {
  return function(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return users.some(function(user) {
        return user.id === submittedUser.id
      })
    })
  }
}
