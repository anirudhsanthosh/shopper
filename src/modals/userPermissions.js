const { parentModal } = require("./modal");

class UserPermissions extends parentModal {
  columns = ["id", "user_id", "permission_id"];
  constructor(connection) {
    super(connection, "user_permissions");
  }
}

exports.UserPermissions = UserPermissions;
