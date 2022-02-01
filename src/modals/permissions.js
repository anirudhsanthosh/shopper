const { parentModal } = require("./modal");

class Permissions extends parentModal {
  columns = ["permission_id", "permission_name", "permission_level"];
  constructor(connection) {
    super(connection, "permissions");
  }
}

exports.Permissions = Permissions;
