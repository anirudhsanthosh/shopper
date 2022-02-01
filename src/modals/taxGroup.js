const { parentModal } = require("./modal");

class TaxGroup extends parentModal {
  columns = ["id", "tax_group_id", "child_tax_id"];
  constructor(connection) {
    super(connection, "tax_group");
  }
}

exports.TaxGroup = TaxGroup;
