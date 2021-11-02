USE employees_db;

INSERT INTO departments (name)
VALUES
    ('Management'),
    ('IT'),
    ('Engineering'),
    ('Shop');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Project Manager', 120000, 1),                 -- 1
    ('Account Manger', 137000, 1),                  -- 2
    ('Human Resources', 58000, 1),                  -- 3    
    ('Purchaser' 62000, 1),                         -- 4  
    ('Network Administrator' 74000, 2),             -- 5       
    ('IT Specialist', 47000, 2),                    -- 6      
    ('Engineering Manager', 110000, 3),             -- 7          
    ('System Control Specialist', 75000, 3),        -- 8       
    ('Design Manger', 64000, 3),                    -- 9       
    ('Shop Manager', 90000, 4),                     -- 10   
    ('Shop Lead', 65000, 4),                        -- 11   
    ('Wire Technician', 52000,4);                   -- 12    

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Connor', 'Jones', 11, 5),                     
    ('Scott', 'Farmer', 12, 5),                     
    ('Kevin', 'Boone', 12, 5),                      
    ('George', 'Brown', 12, 5),                     
    ('Ricky', 'Schults', 10, null),                 
    ('Sara', 'Archer', 8, 10),                      
    ('Lou', 'Dobbs', 8, 10),                        
    ('Peter', 'Prafke', 8, 10),                     
    ('Shawn', 'Michaels', 9, 10),                      
    ('Donald', 'Easton', 7, null),                  
    ('Barry', 'White', 6, 4),
    ('Mike', 'Donuts', 6, 4),
    ('Alice', 'Bonnette',6, ),
    ('Bailey', 'Yessim', 5, null),
    ('Jerry', 'Lawson', 1, 2),
    ('Justin', 'Baker', 1, 2),
    ('Angela', 'Swhartz', 3, 2),
    ('Mel', 'Jennings', 4, 2),
    ('Alexander', 'Bright', 2, null);
