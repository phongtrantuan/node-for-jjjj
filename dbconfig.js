const config = {
  user: "login",
  password: "login",
  server: "localhost",
  database: "test",
  options: {
    encrypt: false,
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
  port: 49965,
};

module.exports = config;
