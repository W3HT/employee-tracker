USE employees_db;

INSERT INTO departments (name)
VALUES  ("Management"),
        ("IT"),
        ("Engineering"),
        ("Shop");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Project Manager", 120000, 1),                 -- 1
        ("Account Manger", 137000, 1),                  -- 2
        ("Human Resources", 58000, 1),                  -- 3    
        ("Purchaser", 62000, 1),                         -- 4  
        ("Network Administrator", 84000, 2),             -- 5       
        ("IT Specialist", 47000, 2),                    -- 6      
        ("Engineering Manager", 110000, 3),             -- 7          
        ("System Control Specialist", 75000, 3),        -- 8       
        ("Design Manger", 64000, 3),                    -- 9       
        ("Shop Manager", 90000, 4),                     -- 10   
        ("Shop Lead", 65000, 4),                        -- 11   
        ("Wire Technician", 52000, 4);                  -- 12    

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Connor", "Jones", 10, null),                     
        ("Scott", "Farmer", 11, 10),                     
        ("Kevin", "Boone", 12, 10),                      
        ("George", "Brown", 12, 10),                     
        ("Ricky", "Schults", 12, 10),                 
        ("Sara", "Archer", 7, null),                      
        ("Lou", "Dobbs", 8, 7),                        
        ("Peter", "Prafke", 8, 7),                     
        ("Shawn", "Michaels", 9, 7),                      
        ("Donald", "Easton", 8, 7),                  
        ("Barry", "White", 5, null),
        ("Mike", "Donuts", 6, 5),
        ("Alice", "Bonnette",6, 5),
        ("Bailey", "Yessim", 6, 5),
        ("Jerry", "Lawson", 2, null),
        ("Justin", "Baker", 1, 2),
        ("Angela", "Swhartz", 3, 2),
        ("Mel", "Jennings", 4, 2),
        ("Alexander", "Bright", 1, 2);
