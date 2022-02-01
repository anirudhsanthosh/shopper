const {parentModal} = require('./modal');

/**
 * Class for products table extends {@link parentModal} class
 */
class Products extends parentModal{
    constructor(connection){
        super(connection,"products");
    }
}

exports.Products = Products;