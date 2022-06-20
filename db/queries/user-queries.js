const db = require('../connect');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      const users = data.rows;
      return users;
    });
};

module.exports = {
  getUsers
};
