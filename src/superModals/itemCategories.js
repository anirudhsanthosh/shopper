const { parentModal } = require("./modal");

class ItemCategories extends parentModal {
  #create = `CREATE TABLE kb_item_categories( item_category_id integer primary key autoincrement, item_category_name varchar(1024) unique)`;

  //   columns = ["id", "name"];
  constructor(connection) {
    super(connection, "kb_item_categories");
  }
}

exports.ItemCategories = ItemCategories;
