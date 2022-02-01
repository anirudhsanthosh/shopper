const { parentModal } = require("./modal");

class TransactionTypes extends parentModal {
  columns = ["transaction_type_id", "name"];
  constructor(connection) {
    super(connection, "transaction_types");
  }
}

exports.TransactionTypes = TransactionTypes;
