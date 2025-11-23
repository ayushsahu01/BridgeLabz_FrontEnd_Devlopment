// Utility to simulate 1–2 second delay and possible failure
function randomDelay() {
    return 1000 + Math.floor(Math.random() * 1000); // 1000–1999 ms
}

function shouldFail(prob = 0.2) {
    return Math.random() < prob; // 20% failure chance
}

function takeOrder() {
    return new Promise((resolve, reject) => {
        console.log("Step 1: Taking order...");
        setTimeout(() => {
            if (shouldFail()) {
                reject("Failed to take order.");
            } else {
                resolve("Order taken");
            }
        }, randomDelay());
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        console.log("Step 2: Preparing food...");
        setTimeout(() => {
            if (shouldFail()) {
                reject("Failed to prepare food.");
            } else {
                resolve("Food prepared");
            }
        }, randomDelay());
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        console.log("Step 3: Packing order...");
        setTimeout(() => {
            if (shouldFail()) {
                reject("Failed to pack order.");
            } else {
                resolve("Package ready");
            }
        }, randomDelay());
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        console.log("Step 4: Dispatching for delivery...");
        setTimeout(() => {
            if (shouldFail()) {
                reject("Failed to dispatch order.");
            } else {
                resolve("Out for delivery");
            }
        }, randomDelay());
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        console.log("Step 5: Delivering to customer...");
        setTimeout(() => {
            if (shouldFail()) {
                reject("Failed to deliver order.");
            } else {
                resolve("Delivery completed");
            }
        }, randomDelay());
    });
}

// Main async pipeline
async function runPipeline() {
    console.log("Start Pipeline");

    try {
        /*
          Because runPipeline is marked as 'async', JavaScript automatically wraps
          its return value in a Promise.
    
          Each 'await' pauses only THIS async function (not the whole program),
          until the corresponding Promise is fulfilled or rejected.
        */
        const orderResult = await takeOrder();
        console.log(orderResult);

        const prepareResult = await prepare();
        console.log(prepareResult);

        const packResult = await pack();
        console.log(packResult);

        const dispatchResult = await dispatch();
        console.log(dispatchResult);

        const deliverResult = await deliver();
        console.log(deliverResult);

        console.log("Delivery completed!");
    } catch (error) {
        // If ANY awaited Promise rejects, control jumps here.
        console.error("Pipeline failed!", error);
    } finally {
        console.log("Pipeline finished (either success or failure).");
    }
}

/*
Event loop / async behavior notes:

- Each step function (takeOrder, prepare, etc.) returns a Promise which
  resolves or rejects after a random delay using setTimeout.

- The event loop:
  1. Runs synchronous code in runPipeline() until the first 'await'.
  2. At each 'await', if the Promise is pending, runPipeline is paused and
     control returns to the event loop.
  3. When the timer finishes, the Promise settles (fulfilled or rejected),
     and the continuation of runPipeline is queued as a microtask.
  4. The event loop processes that microtask, resuming execution after 'await'.

- If any Promise rejects, we jump into the catch block, print "Pipeline failed!"
  and the error message.
*/

// Start the pipeline
runPipeline();
