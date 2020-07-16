USE employee_trackerDB

-- employee seeds
INSERT INTO employee (first_name, last_name)
VALUES ("Jake", "Smith"), ("Kevin", "Jones"), ("Suzan", "Brown"), 
       ("Maria", "Williams"), ("Chris", "Johnson"), ("David", "Lee"), 
       ("Jose", "Rodriguez"), ("Nikki", "Garcia"), ("George", "Gonzalez"),
       ("Juan", "Lopez"), ("Haylee", "Jones"), ("Jane", "Pearson");

INSERT INTO employee(role_id, manager_id)
VALUES (3, null), (5, 2), (2, null), (1, null), (3, 3), (4, null),
       (2, null), (1, 4), (3, null), (5, 1), (4,null), (1, null);

-- empRole seeds
INSERT INTO empRole (title, salary, department_id)
VALUES ("Sales Coordinator", 45000, 1), 
       ("Sales Manager", 110000, 1),
       ("HR Coordinator", 45000, 2), 
       ("HR Expert", 70000, 2), 
       ("IT Coordinator", 50000, 3), 
       ("IT Manager", 90000, 3),
       ("Customer Service Manager", 75000, 4),
       ("Account Manager", 70000, 4),
       ("Social Media Manager", 64000, 5),
       ("Sr Marketing Manager",85000, 5);
       
-- empDepartment seeds
INSERT INTO department (dep_name)
VALUES ("Sales"), ("Human Resources"), ("IT"), 
       ("Customer Experience"), ("Marketing");