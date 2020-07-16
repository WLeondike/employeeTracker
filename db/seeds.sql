USE employee_trackerDB

-- employee seeds
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jake", "Smith", 3, null), 
       ("Kevin", "Jones", 5, 2), 
       ("Suzan", "Brown", 2, null), 
       ("Maria", "Williams", 1, null), 
       ("Chris", "Johnson", 6, 3), 
       ("David", "Lee", 4, null), 
       ("Jose", "Rodriguez", 7, null), 
       ("Nikki", "Garcia", 2, 4), 
       ("George", "Gonzalez", 10, null),
       ("Juan", "Lopez", 8, 1), 
       ("Haylee", "Jones", 9, 4), 
       ("Jane", "Pearson", 1, null);

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
INSERT INTO empDepartment (dep_name)
VALUES ("Sales"), ("Human Resources"), ("IT"), 
       ("Customer Experience"), ("Marketing");