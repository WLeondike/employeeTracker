const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "WLeondike",
  database: "employee_trackerDB",
});

connection.connect(function (err) {
  if (err) throw err;
  options();
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
        "Exit",
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

function viewEmp() {
  // return this.connection.query(
  //   `SELECT employee.emp_id, employee.first_name, employee.last_name, empRole.title, empDepartment.dep_name
  //   AS empDepartment, empRole.salary, CONCAT(manager.first_name, '', manager.last_name)
  //   AS manager FROM employee
  //   LEFT JOIN empRole ON employee.role_id = empRole.role_id
  //   LEFT JOIN empDepartment ON empRole.department_id = empDepartment.dep_id
  //   LEFT JOIN employee a ON a.employee_id = employee.manager_id`
  // );
}

function viewRole() {}

function viewDep() {}

function addEmp() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "First name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "Last name?",
      },
      {
        type: "input",
        name: "roleID",
        message: "Employee's role ID?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the manager ID number?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleID,
          manager_id: answer.managerID
        },
        function (err) {
          if (err) throw err;
          console.log("Employee added! returning...");
          options();
        }
      );
    });
}

function addDep() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "department",
      message: "Name of the new department?",
    }
  ])
  .then(function (answer) {
    connection.query(
      "INSERT INTO empDepartment SET ?",
      {
        dep_name: answer.department,
      },
      function (err) {
        if (err) throw err;
        console.log("Department added! returning...");
        options();
      }
    );
  });
}

function addRole() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Name of the new role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the new role's salary?",
    },
    {
      type: "input",
      name: "depID",
      message: "What is the Department ID for the new role?",
    }
  ])
  .then(function (answer) {
    connection.query(
      "INSERT INTO empRole SET ?",
      {
        title: answer.title,
        salary: answer.salary,
        department_id: answer.depID
      },
      function (err) {
        if (err) throw err;
        console.log("Role added! returning...");
        options();
      }
    );
  });
}

function updateRole() {}

// options();
