const { parentModal } = require("./modal");

class MeasuringUnit extends parentModal {
  columns = ["id", "name", "unit", "symbol"];
  constructor(connection) {
    super(connection, "Measuring_unit");
  }
}

exports.MeasuringUnit = MeasuringUnit;
