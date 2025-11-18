// Q1. Scope Conflict Resolver

let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    // Add bonus only for permanent employees
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Total Salary: ${salary}`);
}

// Testing both cases
calculateSalary(true);   // Should add bonus
calculateSalary(false);  // Should NOT add bonus

console.log("Global Bonus Still:", bonus); // Global unaffected
