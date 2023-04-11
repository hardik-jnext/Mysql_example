const conn = require("../Config.js");


//get 

const getEmployee = (req, res) => {
  let selectRecord = `select * from employee_tb `;
  conn.query(selectRecord, (error, result) => {
    if (error) {
      throw error;
    } else {
      res.send(result);
    }
  });
};

//insert 

const postEmployee = (req, res) => {
  let selectRecord = `insert into employee_tb(id,Name,Age)values(${req.body.id},"${req.body.Name}",${req.body.Age}) `;
  conn.query(selectRecord, (error, result) => {
    if (error) {
      throw error;
    } else {
      res.send(result);
    }
  });
};

//update

const updateEmployee = (req, res) => {
  let selectRecord = `update employee_tb set Name = "rajesh",Age = "22" where id = ${req.body.id} `;
  conn.query(selectRecord, (error, result) => {
    if (error) {
      throw error;
    } else {
      res.send(result);
    }
  });
};

//delete

const deleteEmployee = (req, res) => {
  let selectRecord = `delete from employee_tb where id = ${req.body.id} `;
  conn.query(selectRecord, (error, result) => {
    if (error) {
      throw error;
    } else {
      res.send(result);
    }
  });
};

module.exports = { getEmployee, postEmployee, updateEmployee, deleteEmployee };
