const {parentModal} = require('./modal');

class Article extends parentModal{
    
    columns =[
        "id",
        "name",
        "offer",
    ];
    constructor(connection){
        super(connection,"article");
        
    }

}

exports.Article = Article;