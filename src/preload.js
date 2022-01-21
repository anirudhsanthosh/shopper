const testMgr = require("./modals/testmgr");
const {contextBridge} = require("electron");


const products = require('./modals/product');
const getUsers = ()=>{
   return testMgr.getNames();
}

contextBridge.exposeInMainWorld("api",{
    getNames : getUsers,
    
})

