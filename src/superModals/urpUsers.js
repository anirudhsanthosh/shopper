const { parentModal } = require("./modal");

class UrpUsers extends parentModal {
  #create = `CREATE TABLE urp_users (user_id integer primary key autoincrement,user_name varchar(64) NOT NULL,user_role_id integer default NULL,user_passcode varchar(64) default NULL,user_phone_or_emaill varchar(256) default NULL,user_is_active integer default 1,user_is_deleted integer default 0,user_sync_enabled integer default 0,user_sync_started integer default 0)`;

  //   columns = ["id", "name"];
  constructor(connection) {
    super(connection, "urp_users");
  }
}

exports.UrpUsers = UrpUsers;
