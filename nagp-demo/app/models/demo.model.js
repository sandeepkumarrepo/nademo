const sql = require("./db.js");

// constructor
class Demo {
    constructor(demo) {
        this.aNumber = demo.aNumber;
    }

}

Demo.connect = () => {
    sql.check()
};

Demo.create = (newDemo, result) => {

  sql.query("INSERT INTO demorecords SET ?", newDemo, (err, res) => {
    if (err) {
      console.log("error for Insert: ", err);
      result(err, null);
      return;
    }

    console.log("created demorecords: ", { id: res.insertId, ...newDemo });
    result(null, { id: res.insertId, ...newDemo });
  });
};

Demo.getAll = (aNum, result) => {
  let query = "SELECT * FROM demorecords";

  if (title) {
    query += ` WHERE aNumber LIKE '%${aNum}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("newDemo: ", res);
    result(null, res);
  });
};

module.exports = Demo;