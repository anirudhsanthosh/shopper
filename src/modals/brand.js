const {parentModal} = require('./modal');

class Brand extends parentModal{
    
    columns =[
        "id",
        "name",
    ];
    constructor(connection){
        super(connection,"brand");
        
    }

}

exports.Brand = Brand;