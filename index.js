const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "WLeondike",
  database: "employee_trackerDB",
});

connection.connect(function(err) {
  if (err) throw err;
  // options();
});

// connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

function options() {
  inquirer
    .prompt({
      type: "rawlist",
      name: "empOptions",
      message: "What would you like to do?",
      choices: [
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
        "Exit",
      ],
    })
    .then(function (answer) {
      switch (answer.empOptions) {
        case "View All Employees By Department":
          empDep();
          break;

        case "View All Employees By Manager":
          empManager();
          break;

        case "Add Employee":
          addEmp();
          break;

        case "Remove Employee":
          removeEmp();
          break;

        case "Update Employee Role":
          updateEmpRole();
          break;
        case "Update Employee Manager":
          updateEmpManager();
          break;
        case "View All Roles":
          allRoles();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}
function empDep() {};

function empManager() {};

function addEmp() {};

function removeEmp() {};

function updateEmpRole() {};

function updateEmpManager() {};

function allRoles() {};

options();
