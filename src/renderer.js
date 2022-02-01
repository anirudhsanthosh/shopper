import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.css";
const bootstrap = require("bootstrap");

import { displayTable } from "./renderer_modules/manipulateData.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log(api);

  const tableDisplay = document.querySelector("#tables");
  Object.keys(api.modal).map((table) => {
    const button = document.createElement("button");
    button.innerText = table;
    button.classList.add("btn", "btn-primary", "m-2");
    button.onclick = () => {
      displayTable(api.modal[table].columns, table);
      localStorage.currentTable = table;
    };
    tableDisplay.appendChild(button);
  });

  if (localStorage.currentTable) {
    const table = localStorage.currentTable;
    displayTable(api.modal[table].columns, table);
  }
});
