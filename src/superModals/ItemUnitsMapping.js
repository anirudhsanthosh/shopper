const { parentModal } = require("./modal");

class ItemUnitsMapping extends parentModal {
  #create = `CREATE TABLE kb_item_units_mapping(unit_mapping_id integer primary key autoincrement, base_unit_id integer references kb_item_units(unit_id), secondary_unit_id integer references kb_item_units(unit_id), conversion_rate double)`;

  //   columns = ["id", "name"];
  constructor(connection) {
    super(connection, "kb_item_units_mapping");
  }
}

exports.ItemUnitsMapping = ItemUnitsMapping;
