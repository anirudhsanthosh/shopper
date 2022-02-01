const { parentModal } = require("./modal");

class Suppliers extends parentModal {
  columns = [
    "id",
    "first_name",
    "last_name",
    "phone",
    "email",
    "address",
    "supplier_type",
    "comments",
  ];
  constructor(connection) {
    super(connection, "suppliers");
  }
}

exports.Suppliers = Suppliers;
