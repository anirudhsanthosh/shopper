let dbmgr = require("./dbmgr");
const {products} = require('./product');
let db = dbmgr.db;

exports.getNames = ()=>{
    const sql = `select * from users`;
    let stmnt = db.prepare(sql);
    let res = stmnt.all();
    return res;
}

let a = new products(db);
console.log(a.set())
