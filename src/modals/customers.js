const {parentModal} = require('./modal');

class Customers extends parentModal{
    
    columns =[
        "id",	
	"first_name",
	"last_name",
	"phone",
	"email",
	"loyality",
	"address",
	"comment",
	"customer_type",
	"company",
    ];
    constructor(connection){
        super(connection,"customers");
        
    }

}

exports.Customers = Customers;

    