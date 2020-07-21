DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employee (
  emp_id INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT
);

CREATE TABLE empRole(
  role_id INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL
);

CREATE TABLE empDepartment(
  dep_id INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  dep_name VARCHAR(30) NOT NULL
);

-- These statements are to be run the after the seeds.sql file has been run 
-- in order to avoid a conflict with the FK
-- ------------------------------------------------------------------------

-- ALTER TABLE employee
-- ADD FOREIGN KEY(role_id) REFERENCES empRole(role_id) ON DELETE CASCADE,

-- ALTER TABLE employee
-- ADD FOREIGN KEY(manager_id) REFERENCES employee(emp_id) ON DELETE CASCADE

-- ALTER TABLE empRole
-- ADD FOREIGN KEY(department_id) REFERENCES empDepartment(dep_id) ON DELETE CASCADE