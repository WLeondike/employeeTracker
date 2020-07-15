DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employee (
  emp_id INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY(role_id) REFERENCES empRole(role_id) ON DELETE CASCADE,
  FOREIGN KEY(manager_id) REFERENCES employee(emp_id) ON DELETE CASCADE
);

CREATE TABLE empRole(
  role_id INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY(department_id) REFERENCES empDepartment(dep_id) ON DELETE CASCADE
);

CREATE TABLE empDepartment(
  dep_id INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL, 
);