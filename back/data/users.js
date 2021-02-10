const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin',
    email: 'me@s.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'johndoe@s.com',
    password: bcrypt.hashSync('12345', 11),
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@s.com',
    password: bcrypt.hashSync('123456', 10),
  },
];
module.exports = users;
