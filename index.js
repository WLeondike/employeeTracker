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
        "View All Employees",
        "View All Roles",
        "View All Departments",
        //"View All Employees By Manager", //Bonus
        "Add Employee",
        "Add Department",
        "Add Role",
        //"Remove Employee", //Bonus
        //"Remove Department", //Bonus
        //"Remove Role", //Bonus
        "Update Employee Role",
        //"Update Employee Manager", //Bonus
        "Exit"
      ],
    })
    .then(function (answer) {
      switch (answer.empOptions) {
        case "View All Employees":
          viewEmp();
          break;

        case "View All Roles":
          viewRole();
          break;

        case "View All Departments":
          viewDep();
          break;

        case "Add Employee":
          addEmp();
          break;

        case "Add Department":
          addDep();
          break;

        case "Add Role":
          addRole();
          break;

        case "Update Employee Role":
          updateRole();
          break;

        case "Exit":
          connection.end();
          break;
      }
    });
}
function viewEmp() {};

function viewRole() {};

function viewDep() {};

function addEmp() {};

function addDep() {};

function addRole() {};

function updateRole() {};

options();
