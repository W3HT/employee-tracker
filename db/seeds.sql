USE employees_db;

INSERT INTO departments (name)
VALUES  
        ("Management"),
        ("IT"),
        ("Engineering"),
        ("Shop");

INSERT INTO roles (title, salary, department_id)
VALUES  
        ("Project Manager", 120000, 1),                 -- 1
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
VALUES  
        ("Connor", "Jones", 10, null),    -- 1                 
        ("Scott", "Farmer", 11, 1),       -- 2            
        ("Kevin", "Boone", 12, 1),        -- 3              
        ("George", "Brown", 12, 1),       -- 4           
        ("Ricky", "Schults", 12, 1),      -- 5           
        ("Sara", "Archer", 7, null),      -- 6                
        ("Lou", "Dobbs", 8, 6),           -- 7             
        ("Peter", "Prafke", 8, 6),        -- 8             
        ("Shawn", "Michaels", 9, 6),      -- 9                
        ("Donald", "Easton", 8, 6),       -- 10            
        ("Barry", "White", 5, null),      -- 11
        ("Mike", "Donuts", 6, 11),        -- 12
        ("Alice", "Bonnette",6, 11),      -- 13      
        ("Bailey", "Yessim", 6, 11),      -- 14 
        ("Jerry", "Lawson", 2, null),     -- 15
        ("Justin", "Baker", 1, 15),       -- 16
        ("Angela", "Swhartz", 3, 15),     -- 17
        ("Mel", "Jennings", 4, 15),       -- 18
        ("Alexander", "Bright", 1, 15);   -- 19
