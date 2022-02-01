const { parentModal } = require("./modal");

class TaxMapping extends parentModal {
  #create = `CREATE TABLE kb_tax_mapping(tax_mapping_id integer primary key autoincrement, tax_mapping_group_id integer references kb_tax_code(tax_code_id), tax_mapping_code_id integer references kb_tax_code(tax_code_id), tax_mapping_date_created datetime default CURRENT_TIMESTAMP,tax_mapping_date_modified datetime default CURRENT_TIMESTAMP)`;

  constructor(connection) {
    super(connection, "kb_tax_mapping");
  }
}

exports.TaxMapping = TaxMapping;
