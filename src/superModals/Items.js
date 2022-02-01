const { parentModal } = require("./modal");

class Items extends parentModal {
  #create = `CREATE TABLE kb_items( item_id integer primary key autoincrement ,item_name varchar(256), item_sale_unit_price double, item_purchase_unit_price double, item_stock_quantity double default 0, item_min_stock_quantity double default 0, item_location varchar(256) default '', item_stock_value double default 0, item_date_created datetime default CURRENT_TIMESTAMP, item_date_modified datetime default CURRENT_TIMESTAMP, item_type integer default 1, category_id integer default 1, item_code varchar(32) unique default null, base_unit_id integer references kb_item_units(unit_id), secondary_unit_id integer references kb_item_units(unit_id), unit_mapping_id integer references kb_item_units_mapping(unit_mapping_id), item_hsn_sac_code varchar(32) default '', item_tax_id integer default null references kb_tax_code(tax_code_id), item_tax_type integer default 2, item_additional_cess_per_unit double default null, item_description varchar(256) default '', item_is_active integer default 1, item_tax_type_purchase integer default 2, item_catalogue_status integer default 0, item_catalogue_sale_unit_price double  default 0, item_catalogue_description varchar(256) default '', item_ist_type integer default null ,item_discount_type integer default 1, item_discount double default 0, created_by integer default null references urp_users(user_id),updated_by integer default null references urp_users(user_id), UNIQUE(item_name,item_type), foreign key(category_id) references kb_item_categories(item_category_id))`;

  constructor(connection) {
    super(connection, "kb_items");
  }
}

exports.Items = Items;
