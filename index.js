// imports
const { prompt } = require("inquirer");
const express = require('express')
// const db = require("./db");
const mysql = require('mysql2');
const inquirer = require("inquirer");
const { resolve } = require("path/posix");
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public');

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
    .then(
        res => {
            newDepartment(res.department);
                console.log('Added New Department');
                init();
        })
    ]); 
   
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
            name: "de"
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
                    message: "Please enter the employee's first name: ",
                    name: "first"

                },
                {
                    type: "input",
                    message: "Please enter the employee's last name: ",
                    name: "last"
                },
                {
                    type: "list",
                    message: "Please select their manger: ",
                    name: "manager"
                }
            ])
            .then(
                res => {
                    rolePrompt(res)
                }
            )

        }
    )
}

function updateRole() {
    rolesTable().then(
        res => {
            inquirer
            .prompt([
                {
                    type: "list",
                    message:"Please select Employee to udate: ",
                    name: "employeeToUpdate",
                    choices: [...res]
                }
            ])
            .then(
                res => {
                    roleq
                }
            )
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
        .then((
            res => {
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
    let promise = new Promise((resolve, reject) => {
            db.query(`SELECT name, id AS value FROM departments`, (err, results) => {
                if (err)
                    reject(err);
                resolve(results);
            });
        })
};

function allRoles() {
    let promise = new Promise((resolve, reject) => {
        db.query(`SELECT title AS name, id AS value FROM departments`, (err, results) => {
            if(err)
                reject (err)
            resolve (results)
        })
    })
};

function allEmployees() {
    let promise = new Promise((resolve, reject) => {
        db.query(`SELECT name, id AS value FROM departments`, (err, results) => {
            if(err)
                reject (err)
            resolve (results)
        })
    })
};
    
}

function newDepartment() {
    db.query('SELECT name, id AS value FROM departments', (err, results) => {
            if(err)
                reject (err)
            resolve (results)
        })
    })
    
}

function newRole(title, salary, department_id) {
    db.query('INSERT INTO departments (name) VALUES (?)', name, (err, results) => {
        if(err)
            console.log(err)
        return results

    })
}



function allManagers() {

}

function deptTable() {

}

function rolesTable() {
    let promise = new Promise((resolve, reject) => {
        db.query('SELECT roles.id, title, name AS Department, salary FROM roles JOIN department ON department_id')

}

function employeesTable() {

}

function rolePrompt(prevData){
    allRoles().then(
        res => {
            inquirer
            .prompt([
                {
                    type: "list",
                    message:"Please select role: ",
                    name: "role",
                    choices: [...res]
                }
            ])
            .then(
                res => {
                    if(Object.keys(prevData).length == 3)

                }
            )
        }
    )
}

function insertEmployee(first, last, role, manager) {
    db.query('INSERT INTO ROLES employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [first, last, role, manager], (err, results) => {
        if(err)
            console.log(err)
        return results
    }
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