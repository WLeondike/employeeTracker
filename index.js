const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

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
  connection.query("SELECT * FROM employee", function (error, results) {
    if (error) throw error;
    console.table(results);
    options();
  });
}

function viewRole() {
  connection.query("SELECT * FROM empRole", function (error, results) {
    if (error) throw error;
    console.table(results);
    options();
  });
}

function viewDep() {
  connection.query("SELECT * FROM empDepartment", function (error, results) {
    if (error) throw error;
    console.table(results);
    options();
  });
}

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
          manager_id: answer.managerID,
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
      },
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
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO empRole SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.depID,
        },
        function (err) {
          if (err) throw err;
          console.log("Role added! returning...");
          options();
        }
      );
    });
}

function updateRole() {
  let updateEmpArr = [];
  let newRoleArr = [];
  let empRes = [];
  connection.query(
    "SELECT emp_id, first_name, last_name FROM employee",
    (err, res) => {
      empRes = res;
      if (err) throw err;
      for (i = 0; i < res.length; i++) {
        let firstName = res[i].first_name;
        let lastName = res[i].last_name;
        updateEmpArr.push(firstName + " " + lastName);
      } 
      connection.query("SELECT role_id, title FROM empRole", (err, result) => {
        if (err) throw err;
        for (j = 0; j < result.length; j++) {
          newRoleArr.push(result[j].title);
        }
        inquirer
          .prompt([
            {
              type: "list",
              name: "updatedEmp",
              message: "Which employee would you like to update?",
              choices: updateEmpArr,
            },
            {
              type: "list",
              name: "updatedRole",
              message: "What is the employee's new role?",
              choices: newRoleArr,
            },
          ])
          .then(function (answer) {
            const roleId = result.filter(
              (empRole) => empRole.title === answer.updatedRole
            );
            let employeeName = answer.updatedEmp.split(" ")[0];
            const emplId = empRes.filter(
              (employee) => employee.first_name === employeeName
            );
            connection.query(
              "UPDATE employee SET role_id = ? WHERE emp_id = ?",
              [roleId[0].role_id, emplId[0].emp_id],
              function (err, res) {
                if (err) throw err;
                console.log("Updated role! returning...");
                options();
              }
            );
          });
      });
    }
  );
}
