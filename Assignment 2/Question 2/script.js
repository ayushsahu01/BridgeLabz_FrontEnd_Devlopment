// Q2. String Manipulation Report

let productName = " wireless headphones PRO ";

// Step 1: Trim spaces
let trimmed = productName.trim().toLowerCase();

// Step 2: Capitalize each word
let formatted = trimmed
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Step 3: Replace "Pro" with "Pro Edition"
let finalTitle = formatted.replace("Pro", "Pro Edition");

console.log("Cleaned Title:", finalTitle);
console.log("Length:", finalTitle.length);
