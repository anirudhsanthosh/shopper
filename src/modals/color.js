const {parentModal} = require('./modal');


/**
 * Class for products table extends {@link parentModal} class
 */
class Color extends parentModal{
    columns =[
        "id",
        "name",
        "hash",
    ];
    constructor(connection){
        super(connection,"color");
    }
}

exports.Color = Color;