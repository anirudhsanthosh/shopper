const { parentModal } = require("./modal");

class TaxList extends parentModal {
  columns = ["id", "name", "slug", "rate", "parent"];
  constructor(connection) {
    super(connection, "tax_list");
  }
}

exports.TaxList = TaxList;
