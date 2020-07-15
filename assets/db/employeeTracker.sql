DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employee (
  id int(10) AUTO_INCREMENT NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  manager_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE empRole(
  id int(10) AUTO_INCREMENT NOT NULL,
  title varchar(30) NOT NULL,
  salary decimal NOT NULL,
  department_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE empDepartment(
  id int(10) AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id) 
);