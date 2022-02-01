const { parentModal } = require("./modal");

class Categories extends parentModal {
  columns = ["id", "name", "parent"];
  constructor(connection) {
    super(connection, "categories");
  }
}

exports.Categories = Categories;
