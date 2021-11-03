// imports
const { prompt } = require("inquirer");
const express = require('express')
// const db = require("./db");
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
        password:'root',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database`)
);

init();

function viewDepartments(){
    allDept().then(
        res => {
            console.log(res);
            init()
        }
    )
};

function viewRoles(){
    allRoles().then(
        res => {
            console.table(res);
            init();
        }
    )
};

function viewEmployees(){
    allEmployees().then(
        res => {
            console.table(res)
            init();

    })
}

function addDepartment(){
    inquirer
    .prompt([
        {
            type:"input",
            message:"Please enter the name of the department: ",
            name: "department"
        }
    ])
    .then(
        res => {
            newDepartment(res.department);

        }
   
}
function addRole(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter the name of the role: ",
            name: "role_name"
    
        },
        {
            type: "input",
            message: "Please enter the salary of the role: ",
            name: "salary"
        },
        {
            type: "list",
            message: "Please enter the department this role belongs to: ",
            name
            choices: [...res]
        }
    ])
    .then(
        res => {
            newRole(res.role_name, res.salary, res.depat)
        }
    )   
};

function addEmployee() {
    allManagers().then(
        res => {
            inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter the employee's first name: "
                    name: "first"

                }
            ])
        }
    )
}



function init(){

    inquirer
        .prompt({
            type: 'list',
            name: "todo",
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

        }))};
function allDept() {


}

function allRoles() {
 // query list of all roles
 db.query('get all roles.', (err, res) => {
    // results (array of roles)
    // 
})

}

function allEmployees() {
    
}

function newDepartment() {

}

function newRole() {

}
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