let dbmgr = require("./dbmgr");
const {products} = require('./product');
const {Categories} = require('./category');
let db = dbmgr.db;

exports.getNames = ()=>{
    const sql = `select * from users`;
    let stmnt = db.prepare(sql);
    let res = stmnt.all();
    return res;
}

let a = new products(db);
console.log(a.set())

let categories = new Categories(db);
categories.new();
