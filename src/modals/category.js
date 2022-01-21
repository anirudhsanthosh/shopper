const {parentModal} = require('./modal');

class Categories extends parentModal{
 
    constructor(connection){
        super(connection,"categories");
        
    }

}

exports.Categories = Categories;