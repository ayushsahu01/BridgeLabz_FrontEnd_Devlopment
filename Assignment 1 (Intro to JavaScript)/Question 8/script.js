// Q8. Employee Salary Projection

let salary = 30000; 
let incrementRate = 10; // percent
let salaryTable = {};

for (let year = 1; year <= 5; year++) {
    salary += salary * (incrementRate / 100); // apply increment
    salaryTable[`Year ${year}`] = Math.round(salary);
}

console.table(salaryTable);
