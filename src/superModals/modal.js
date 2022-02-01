/**
 * Class to create new modal for any table
 */

class ParentModal {
  #db;
  #table;
  columns = [];
  constructor(connection, table) {
    if (typeof connection !== "object") {
      throw new Error(
        "the connection to database is not instance of class db."
      );
    }
    this.#db = connection;
    this.#table = table;

    let columns = this.getqry(`PRAGMA table_info(${table});`).status;
    if (columns) this.columns = columns;
  }
  /**
   * function for prepare the input array to placeolders and columns
   * @param {Array<object>}
   */
  #prepare(arr) {
    if (arr.length === 0) return null;

    let columns = Object.keys(arr[0]);
    let placeholder = columns.map((column) => `@${column}`);
    columns = columns.join(",");
    return {
      columns,
      placeholder,
    };
  }

  /**
   * function for actual data insertion. Each vaules inside the array will be inserted
   * inorder to do things work the placeholdre should be namedone not '?'
   * @param {Array<object>} values
   * @param {String}sql
   * @returns {Object} containing details of last insertion
   *
   */
  #transaction(values, sql) {
    const insertMany = this.#db.transaction((values) => {
      let status;
      let counter = 0;
      for (const value of values) {
        status = sql.run(value);
        counter++;
      }
      status.totalInsertion = counter;
      return status;
    });

    return insertMany(values);
  }

  /**
   * to add new item to table
   * @param {Arrray<Object>} values list of column:value pair
   * takes only array as input and format it for sqlite prepare, then appy those formatted data to better_sql dbprepare
   * NB: all the objects inside the array should have same key or call will fail
   */

  new(values) {
    if (!(values instanceof Array) || values.length == 0) {
      throw new Error("new function expect a array of values");
    }

    const stat = {
      error: null,
    };
    try {
      const formatedInput = this.#prepare(values);
      const stmt = this.#db.prepare(
        `INSERT INTO ${this.#table} (${formatedInput.columns}) VALUES (${
          formatedInput.placeholder
        })`
      );
      stat.status = this.#transaction(values, stmt);
    } catch (e) {
      stat.error = e;
    }
    return stat;
  }
  /**
   * for getting very first result from query
   * @param {String} condition Condition must be present else error will be thrown.
   * @param {Array<String>} columns  list of columns
   * @returns
   */
  get(condition = "", columns = ["*"]) {
    if (!(columns instanceof Array) || columns.length == 0) {
      throw new Error("you must provide a valid column array.");
    }
    if (!condition) {
      throw new Error("you must provide a valid Condition.");
    }
    const stat = {
      error: null,
      status: null,
    };
    try {
      const stmt = condition
        ? this.#db.prepare(
            `SELECT ${columns.join(",")} FROM ${this.#table} WHERE ${condition}`
          )
        : this.#db.prepare(`SELECT ${columns.join(",")} FROM ${this.#table} `);
      stat.status = stmt.get();
    } catch (e) {
      stat.error = e;
    }
    return stat;
  }
  /**
   * Get all values satisfying the condition
   * @param {Array<Strings} columns List of column names as Array[ ]
   * @param {String} condition  valid sql condition.
   * @returns {Object }{error,status} returns object contain error or status, either one will null;
   */
  getAll(columns = ["*"], condition = "") {
    const stat = {
      error: null,
      status: null,
    };
    try {
      const stmt = condition
        ? this.#db.prepare(
            `SELECT ${columns.join(",")} FROM ${this.#table} WHERE ${condition}`
          )
        : this.#db.prepare(`SELECT ${columns.join(",")} FROM ${this.#table} `);
      stat.status = stmt.all();
    } catch (e) {
      stat.error = e;
    }
    return stat;
  }

  set() {
    console.log(this.#table);
  }

  delete(condition) {
    if (!condition) {
      throw new Error("you must provide a valid Condition.");
    }
    const stat = {
      error: null,
      status: null,
    };
    try {
      const stmt = this.#db.prepare(
        `DELETE FROM ${this.#table} WHERE ${condition};`
      );
      stat.status = stmt.run();
    } catch (e) {
      stat.error = e;
    }
    return stat;
  }

  display() {}
  getqry(sql) {
    const stat = {
      error: null,
      status: null,
    };
    try {
      const stmt = this.#db.prepare(sql);
      stat.status = stmt.all();
    } catch (e) {
      stat.error = e;
    }
    return stat;
  }
}

exports.parentModal = ParentModal;
