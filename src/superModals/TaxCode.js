const { parentModal } = require("./modal");

class TaxCode extends parentModal {
  #create = `CREATE TABLE kb_tax_code(tax_code_id integer primary key autoincrement, tax_code_name varchar(32) unique, tax_rate double, tax_code_type integer default 0, tax_rate_type integer default 4, tax_code_date_created datetime default CURRENT_TIMESTAMP, tax_code_date_modified datetime default CURRENT_TIMESTAMP)`;

  constructor(connection) {
    super(connection, "kb_tax_code");
  }
}

exports.TaxCode = TaxCode;
