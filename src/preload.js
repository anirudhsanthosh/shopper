const testMgr = require("./modals/testmgr");
const {contextBridge} = require("electron")
const getUsers = ()=>{
   return testMgr.getNames();
}

contextBridge.exposeInMainWorld("api",{
    getNames : getUsers,
})

