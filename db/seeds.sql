INSERT INTO department
(name)
VALUES
('Sales'),
('Engineering'),
('Financial');

INSERT INTO roles
(title, salary, department_id)
VALUES
('Sales Employee', 20000, 1),
('Sales Manager', 50000, 1),
('Engineering Employee', 15000, 2),
('Engineering Manager', 30000, 2),
('Financial Employee', 20000, 3),
('Financial Manager', 50000, 3);

INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, null);