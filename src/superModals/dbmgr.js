const sqlite = require("better-sqlite3");
path = require('path');

// const db = new sqlite(path.resolve(__dirname, "../db/test.db"), {fileMustExist: true});
const db = new sqlite(path.resolve(__dirname, "../db/billing_app_v2.db"), {fileMustExist: true});
exports.db = db;