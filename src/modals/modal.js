class ParentModal{
    #db;
    #table;
    constructor(connection,table){
        if(typeof(connection) !== "object" ){
            throw new Error("the connection to database is not instance of class db.");
        }
        this.#db= connection;
        this.#table = table;
    }

    get(products){
        if(typeOf(products) == 'object'){


        }else{

        }

    }

    set(products){
        console.log(this.#table);
    }

    new(){
        try{
            const stmt = this.#db.prepare(`INSERT INTO ${this.#table} (name, parent) VALUES (?, ?)`);
            const info = stmt.run('Joey', 2);
            console.log(info);
        }
        catch(e){
            console.error(e);
        }
    }

    delete(){

    }
}

exports.parentModal = ParentModal;