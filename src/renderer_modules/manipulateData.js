export { displayTable, createForm, showTable, tableMaker };

function displayTable(columns, table) {
  console.log(columns, table);
  createForm(columns, table);
  showTable(table);
}

function createForm(columns, table) {
  const formDisplay = document.querySelector("#form");
  const form = document.createElement("form");
  form.id = table;
  formDisplay.innerHTML = "";
  formDisplay.appendChild(form);
  //h3
  const h3 = document.createElement("h3");
  h3.innerText = `Add new ${table}`;
  form.appendChild(h3);

  columns.forEach((column, index) => {
    //lable
    const label = document.createElement("lable");
    label.innerText = column.pk == 1 ? `${column.name} [PK]` : column.name;
    label.setAttribute("for", column.name);

    ///input
    const type =
      column.type == "INTEGER"
        ? "number"
        : column.type.includes("varchar")
        ? "text"
        : column.type == "datetime"
        ? "datetime-local"
        : "text";
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("primaryKey", column.pk);
    input.setAttribute("notnull", column.notnull);
    input.setAttribute("placeholder", column.dflt_value);
    input.setAttribute("dflt_value", column.dflt_value);

    input.classList.add("form-control");
    input.id = column.name;

    //div
    const div = document.createElement("div");
    div.classList.add("mb-3");
    div.append(label, input);
    form.append(div);
  });

  const submit = document.createElement("button");
  submit.classList.add("btn", "btn-primary");
  submit.append("Insert");
  submit.type = "submit";
  form.appendChild(submit);

  form.onsubmit = (e) => {
    e.preventDefault();
    const table = e.target.id;
    console.log(e);
    let error = false;
    const data = {};
    Array.from(e.target).forEach((elem) => {
      if (elem.type == "submit") return;
      if (elem.getAttribute("primaryKey") == 1 && elem.value == "") return;

      if (
        elem.value == "" &&
        elem.getAttribute("notnull") == 1 &&
        elem.getAttribute("dflt_value") != "CURRENT_TIMESTAMP"
      ) {
        elem.classList.add("is-invalid");
        error = true;
      } else {
        elem.classList.remove("is-invalid");
      }
      const column = elem.id;
      data[column] = elem.value;
    });
    if (error) return;
    console.table(data);
    const response = window.api.sql(table, "new", [data]);
    console.log(response);
    showTable(table);
  };
}

function showTable(table) {
  const place = document.getElementById("display");
  let allCategories = api.sql(table, "getAll");
  place.innerHTML = "";
  if (allCategories.error) place.innerHTML = "Error";
  place.append(
    tableMaker(allCategories.status, table, () => {
      showTable(table);
    })
  );
}

function tableMaker(data = [], tableName, displayFuncton) {
  const tableDisplayFunction = displayFuncton;
  if (data.length == 0) return document.createTextNode("no column were found");
  let table;
  let titles = Object.keys(data[0]);
  console.log(titles.push("action"));

  table = document.createElement("table");
  table.classList.add(
    "table",
    "table-dark",
    "table-striped",
    "mt-4",
    "table-bordered",
    "table-hover"
  );
  const thead = table.createTHead();
  const header = thead.insertRow();
  // for adding action buttons

  titles.map((title) => {
    const cell = header.insertCell();
    cell.innerHTML = title;
  });

  const body = table.createTBody();

  data.map((row) => {
    const tableRow = body.insertRow();
    row.action = "";
    titles.map((title) => {
      if (title != "action")
        return (tableRow.insertCell().innerHTML = row[title]);
      else {
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.innerHTML = `<i class="bi bi-trash"></i>`;
        tableRow.insertCell().append(deleteButton);
        deleteButton.setAttribute("data-id", row.id);
        deleteButton.onclick = () => {
          //   console.log(tableName, "delete", [`${titles[0]}=${row[titles[0]]}`]);
          const response = api.sql(tableName, "delete", [
            `${titles[0]}=${row[titles[0]]}`,
          ]);
          console.log(response);
          tableDisplayFunction();
        };
      }
    });
  });

  return table;
}
