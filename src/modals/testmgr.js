let dbmgr = require("./dbmgr");
let db = dbmgr.db;

exports.getNames = ()=>{
    const sql = `select * from users`;
    let stmnt = db.prepare(sql);
    let res = stmnt.all();
    return res;
}