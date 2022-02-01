const { parentModal } = require("./modal");

class Users extends parentModal {
  columns = [" id", "username", "email", "password"];
  constructor(connection) {
    super(connection, "users");
  }
}

exports.Users = Users;
