(function nonStrictDemo() {
    function demo(a, a) {
        total = 10; 
    }
    try {
        demo(5, 10);
        console.log("nonStrictDemo: completed. global 'total' created?:", typeof total !== "undefined" ? total : "no total");
        try { delete globalThis.total; } catch (e) { }
    } catch (err) {
        console.log("nonStrictDemo error:", err.message);
    }
})();
(function strictDemo() {
    "use strict";
    function demoStrict(a, a2) {
        // total = 10;
    }
    try {
        console.log("strictDemo: demonstrating behavior (no runtime call because duplicate params are illegal in strict).");
    } catch (err) {
        console.log("strictDemo error:", err.message);
    }
})();

/*
Correct ES6 version:
(function correctES6() {
  "use strict";
  function demo(a, b) {
    let total = 10; // declared
    // delete total; // still invalid to delete a declared variable
    console.log("correctES6 total:", total);
  }
  demo(5, 10);
})();
*/
