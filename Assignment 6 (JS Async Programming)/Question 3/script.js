// Old callback-based function (given for reference)
/*
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}
*/

// New Promise-based version
function getBugs() {
    return new Promise((resolve, reject) => {
        const shouldFail = Math.random() < 0.3; // 30% chance to fail

        setTimeout(() => {
            if (shouldFail) {
                reject("Failed to fetch bugs from server (simulated API error).");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

// Use the Promise-based API
getBugs()
    .then((bugs) => {
        // Convert to objects so console.table looks nicer
        const bugObjects = bugs.map((bug, index) => ({
            id: index + 1,
            description: bug,
        }));
        console.log("Bugs fetched successfully:");
        console.table(bugObjects);
    })
    .catch((error) => {
        console.error("Error fetching bugs:", error);
    });
