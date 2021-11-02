// imports
const { prompt } = require("inquirer");
const express = require('express')
const db = require("./db");
const mysql = require('mysql2');
const inquirer = require("inquirer");
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

// connection to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'root'
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database`)
);

init();

function viewDepartments(){
    
}

function viewRoles(){



}

function viewEmployees(){
 //  run the db query, get results, display result with console.table
 `SELECT * from employees e
 LEFT JOIN roles r ON e.role_id = r.id
 LEFT JOIN departmets d ON XXXXX `

 `SELECT * CONCAT(e.first_name, ' ', e.last_name) AS employee_name from employees e
 LEFT JOIN employees e2 ON e.manager_id = e2.id
 LEFT JOIN roles r ON e.role_id = r.id
 LEFT JOIN departmets d ON XXXXX `


}

function addDepartment(){



}

function addRole(){


    
}

function addEmployee(){
    // query list of all roles
    db.query('get all roles.', (err, res) => {
        // results (array of roles)
        // 
    }


}



function init(){

    inquirer
        .prompt({
            type: 'list',
            name: "todo"
            message: 'Employee Tracker Main Menu',
            choices:[
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update An Employee Role'
            ]
        })
        .then((res => {
            switch(res.todo) {
                // - view all Departments allDept
                case 'View All Departments':
                    viewDepartments();
                    break;
                // - view all roles allRoles
                case 'View All Roles':
                    viewRoles();
                    break;
                // - view all employees allEmployees
                case 'View All Employees':
                    viewEmployees();
                    break;
                // - add department addDept
                case 'Add A Department':
                    addDepartment();
                    break;
                // - add role addRole
                case 'Add A Role':
                    addRole();
                    break;
                // - add employee addEmployee
                case 'Add An Employee':
                    addEmployee();
                    break;
                // - update e.role updateRole
                case 'Update An Employee Role':
                    updateRole();
                    break;                
                default:
                    console.log('timed out...')
            }

        }));


// - departments
    // - table: SELECT *
        // - department names
        // - department ids
// - roles
	// - table:
        // - job title
        // - role id
        // - department name & department id
        // - salary
// - employees
	// - table:
        // - employee id
        // - firstName
        // - lastName
        //  - job title
        // - department
        // - salaries
        // - manager id
// - add department
	// - prompt 
		// - name of department
		    // - add to db
// - add role
	// - prompt for:
		// - name of role, salary, and department id
		    // - add to db
// - add employee
	// - prompt for:
		// - firstName, lastName, role, and  manager id
			// - add to db
// - update role
	// - prompt for:
		// - employee to update
			// - role table:
				// - update db