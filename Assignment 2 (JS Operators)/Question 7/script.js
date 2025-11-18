// Q7. Customer Feedback Processor

let feedback = "Great product! Fast delivery and amazing sound quality!";

// Word count
let words = feedback.split(" ").length;

// Check for negative words
let hasNegative = feedback.toLowerCase().includes("bad") ||
                  feedback.toLowerCase().includes("poor");

if (!hasNegative) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}

console.log("Word Count:", words);
