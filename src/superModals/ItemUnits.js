const { parentModal } = require("./modal");

class ItemUnits extends parentModal {
  #create = `CREATE TABLE kb_item_units(unit_id integer primary key autoincrement, unit_name varchar(50) unique, unit_short_name varchar(10) unique, unit_full_name_editable integer default 1, unit_deletable integer default 1)`;

  constructor(connection) {
    super(connection, "kb_item_units");
  }
}

exports.ItemUnits = ItemUnits;
