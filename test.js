const fs = require("fs");

console.log("Running tests...");

if (!fs.existsSync("index.html")) {
    throw new Error("❌ index.html not found!");
}

const html = fs.readFileSync("index.html", "utf8");

// Test for button 1
if (!html.includes("Button 1")) {
    throw new Error("❌ Button 1 not found in HTML!");
}

// Test for button 2
if (!html.includes("Button 2")) {
    throw new Error("❌ Button 2 not found in HTML!");
}

console.log("✅ All tests passed!");
