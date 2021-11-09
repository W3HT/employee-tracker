// imports
const { prompt } = require("inquirer");
const express = require("express");
// const db = require("./db");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { resolve } = require("path-posix");
const app = express();
const path = require("path");
require("console.table");

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3001;

// connection to the database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database`)
);

init();

function viewDepartments() {
  allDept().then((res) => {
    console.table(res);
    init();
  });
}

function viewRoles() {
  allRoles().then((res) => {
    console.table(res);
    init();
  });
}

function viewEmployees() {
  allEmployees().then((res) => {
    console.table(res);
    init();
  });
}

function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter the name of the department: ",
      name: "department",
    }])
    .then((res) => {
      newDepartment(res.department);
      console.log("Added New Department");
      init();
    })}
  


function addRole() {
  allDept().then((res) => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the name of the role: ",
          name: "role_name",
        },
        {
          type: "input",
          message: "Please enter the salary of the role: ",
          name: "salary",
        },
        {
          type: "list",
          message: "Please enter the department this role belongs to: ",
          name: "department",
          choices: [...res],
        },
      ])
      .then((res) => {
        newRole(res.role_name, res.salary, res.department);
        console.log(`Successfully Added New Role!`)
        init()
      });
  });
}

function addEmployee() {
  allManagers().then((res) => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the employee's first name: ",
          name: "first",
        },
        {
          type: "input",
          message: "Please enter the employee's last name: ",
          name: "last",
        },
        {
          type: "list",
          message: "Please select their manger: ",
          name: "manager",
          choices: [...res],
        },
      ])
      .then((res) => {
        rolePrompt(res);
      });
  });
}

function updateRole() {
  allEmployees2().then((res) => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select Employee to udate: ",
          name: "employeeToUpdate",
          choices: [...res],
        },
      ])
      .then((res) => {
        rolePrompt(res)
      });
  });
}

function init() {
  inquirer
    .prompt({
      type: "list",
      name: "todo",
      message: "Employee Tracker Main Menu",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add A Department",
        "Add A Role",
        "Add An Employee",
        "Update An Employee Role",
      ],
    })
    .then((res) => {
      switch (res.todo) {
        // - view all Departments allDept
        case "View All Departments":
          viewDepartments();
          break;
        // - view all roles allRoles
        case "View All Roles":
          viewRoles();
          break;
        // - view all employees allEmployees
        case "View All Employees":
          viewEmployees();
          break;
        // - add department addDept
        case "Add A Department":
          addDepartment();
          break;
        // - add role addRole
        case "Add A Role":
          addRole();
          break;
        // - add employee addEmployee
        case "Add An Employee":
          addEmployee();
          break;
        // - update e.role updateRole
        case "Update An Employee Role":
          updateRole();
          break;
        default:
          console.log("timed out...");
      }
    });
}
function allDept() {
  let promise = new Promise((resolve, reject) => {
    db.query(`SELECT name AS "Department", id as value FROM departments`, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
  return promise
}

function allRoles() {
  let promise = new Promise((resolve, reject) => {
    db.query(
      `SELECT id as value, title as "Job Title" FROM roles`,
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
  return promise
}

function allEmployees() {
  let promise = new Promise((resolve, reject) => {
    db.query(`SELECT id as value, CONCAT(first_name, " ", last_name) AS "Employee Name", role_id as "Role ID #", manager_id AS "Manager ID #" FROM employees`, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
  return promise
}

function allEmployees2() {
  let promise = new Promise((resolve, reject) => {
    db.query(`SELECT CONCAT(employees.first_name, " ", employees.last_name) as name, id FROM employees`, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
  return promise
}

function newDepartment(name) {
  db.query(`INSERT INTO departments (name) VALUES (?)`, name, (err, results) => {
    if (err) console.log(err);
    return results;
  });
}

function newRole(title, salary, department_id) {
  db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`, [title, salary, department_id], (err, results) => {
      if (err) console.log(err);
      return results;
    }
  );
}

function allManagers() {
  let promise = new Promise((resolve, reject) => {
    db.query(`SELECT CONCAT(employees.first_name, " ", employees.last_name) AS name, id AS value FROM employees WHERE manager_id IS NULL`, (err, results) => {
      if(err) console.log(err)
      resolve (results)
    })
  })
  return promise; 
}

function rolePrompt(prevData) {
  allRoles().then((res) => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select role: ",
          name: "role",
          choices: [...res],
        },
      ])
      .then((res) => {
        // if(Object.keys(prevData).length == 3)
        if(Object.keys(prevData).length == 3 ) {
         insertEmployee(prevData.first, prevData.last, res.role, prevData.manager);
        console.log("Successfully Added New Employee")
      } else {
          updateEmployee(prevData.emp, res.role)
          console.log('Successfully Updated Employee Role!')
      }
      init();  
      });
  });
}

function insertEmployee(first, last, role, manager) {
  db.query(
    "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
    [first, last, role, manager],
    (err, results) => {
      if (err) console.log(err);
      return results;
    }
  );
};

function updateEmployee(role, id) {
  db.query('UPDATE employees SET role_id = ? where id = ?', [role, id], (err, results) => {
    if(err) console.log(err);
    return results
  });
};


