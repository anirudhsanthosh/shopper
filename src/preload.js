// const testMgr = require("./modals/testmgr");
const { contextBridge } = require("electron");
const modalExport = require("./superModals/modalExport");

const sql = (modalName, method, param) => {
  return modalExport?.[modalName]?.[method]?.(param);
};

contextBridge.exposeInMainWorld("api", {
  sql,
  modal: modalExport,
});
