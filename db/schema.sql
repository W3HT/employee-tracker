DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    deptName VARCHAR(30) NOT NULL,
    );

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    jobTitleId VARCHAR(30) NOT NULL,
    departmentId INT,
    FOREIGN KEY (departmentId)
    REFERENCES departments(id) 
    salaryId

    );