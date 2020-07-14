DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employee (
  id int(10) auto_increment not null,
  first_name varchar(30) not null,
  last_name varchar(30) not null,
  role_id int not null,
  manager_id int not null,
  PRIMARY KEY (id)
);

CREATE TABLE empRole(
  id int(10) auto_increment not null,
  title varchar(30) not null,
  salary decimal not null,
  department_id int not null,
  PRIMARY KEY (id)
);

CREATE TABLE empDepartment(
  id int(10) auto_increment not null,
  name varchar(30) not null,
  PRIMARY KEY (id)
);