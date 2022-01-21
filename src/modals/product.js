const {parentModal} = require('./modal');

class Products extends parentModal{
 
    constructor(connection){
        super(connection,"products");
        
    }

}

exports.products = Products;