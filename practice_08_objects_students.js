// ============================================================
// AP CSP — Practice 08: JavaScript Objects
// Unit 5: Working with Data
// ============================================================
// Instructions:
//   Work through each TODO in order.
//   Run the file after each problem to check your output.
//   Use: node practice_08_objects_students.js
// ============================================================

// -----------------------------------------------------------------
// STARTER DATA — use this for Problems 1, 3, and 4
// -----------------------------------------------------------------
const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];

// =================================================================
// PROBLEM 1 — Reading Object Properties
// =================================================================
// You are given this movie object. Write code below to:
//   1. Print the title
//   2. Print the director
//   3. Print true/false: is the runtime over 120 minutes?
//   4. Add a new property `watched` set to true
//   5. Print each key-value pair using console.log("Title:", movie.title) style

const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169,
};

// TODO 1: Print the movie title
// console.log(...)

// TODO 2: Print the director's name
// console.log(...)

// TODO 3: Print true/false — is runtime over 120?
// console.log(...)

// TODO 4: Add a `watched` property set to true
// movie.??? = ???

// TODO 5: Print each key-value pair
// console.log("Title:", ...)
// console.log("Year:", ...)
// console.log("Director:", ...)
// console.log("Rating:", ...)
// console.log("Runtime:", ...)
// console.log("Watched:", ...)

// =================================================================
// PROBLEM 2 — Build Your Own Object
// =================================================================
// Write a function createStudent(name, grade, gpa) that:
//   - Returns an object with those three properties
//   - Also includes isHonors: true if gpa >= 3.5, false otherwise
//
// Expected output:
//   createStudent("Alex", 11, 3.7)  → { name: "Alex", grade: 11, gpa: 3.7, isHonors: true }
//   createStudent("Sam",  10, 2.9)  → { name: "Sam",  grade: 10, gpa: 2.9, isHonors: false }

function createStudent(name, grade, gpa) {
  // TODO: return an object with name, grade, gpa, and isHonors
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 2 ---");
// console.log(createStudent("Alex", 11, 3.7));
// console.log(createStudent("Sam", 10, 2.9));

// =================================================================
// PROBLEM 3 — Searching an Array of Objects
// =================================================================
// Write a function findByName(students, targetName) that:
//   - Uses .find() to return the student object with that name
//   - Returns null if no match is found
//
// Expected output:
//   findByName(students, "ChenZee") → { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false }
//   findByName(students, "Marcus")  → null

function findByName(students, targetName) {
  // TODO: use .find() to search by name
  // Hint: .find() returns undefined if nothing matches — convert that to null using || (or) operator
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 3 ---");
// console.log(findByName(students, "ChenZee"));
// console.log(findByName(students, "Jane"));
// console.log(findByName(students, "Marcus"));

// =================================================================
// PROBLEM 4 — Roster Report
// =================================================================
// Write a function printRoster(students) that uses .forEach() to
// print each student in this format:
//
//   [Grade 11] Jane — GPA: 3.8 ★
//   [Grade 12] ChenZee — GPA: 3.5
//   [Grade 10] Dakota — GPA: 3.9 ★
//
// The ★ appears only if isHonors is true.
// Try solving without the honors first THEN try the star

function printRoster(students) {
  // TODO: loop through students with .forEach()
  // TODO: print each student in the format above
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 4 ---");
// printRoster(students);

// =================================================================
// PROBLEM 5 — Object Inspector
// =================================================================
// Write a function inspectObject(obj) that uses Object.entries() to
// print every key-value pair in this format:
//
//   name → Jane
//   grade → 11
//   gpa → 3.8
//   isHonors → true
//
// It should work on ANY object — test it on the student object below
// AND on the movie object from Problem 1.
// Hint: Object.entries(obj).forEach(([key, value]) => { ... })

const student = {
  name: "Jane",
  grade: 11,
  gpa: 3.8,
  isHonors: true,
};

function inspectObject(obj) {
  // TODO: use Object.entries() and .forEach() with destructuring
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 5: student ---");
// inspectObject(student);
// console.log("\n--- Problem 5: movie ---");
// inspectObject(movie);

// =================================================================
// PROBLEM 6 — Sum the Values
// =================================================================
// Write a function sumValues(obj) that:
//   - Uses Object.values() to get all the values
//   - Adds up only the values that are numbers (typeof value === "number")
//   - Returns the total
// I would chain forEach like the lastg problem
//
// Expected output:
//   sumValues({ math: 92, english: 85, history: 78, name: "Alex" }) → 255

function sumValues(obj) {
  // TODO: get the values with Object.values()
  // TODO: loop through them, add only numbers to a total
  // TODO: return the total
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 6 ---");
// const scores = { math: 92, english: 85, history: 78, name: "Alex" };
// console.log(sumValues(scores));  // → 255
// console.log(sumValues(student)); // → 11 + 3.8 = 14.8  (skips strings and booleans)

// =================================================================
// STRETCH — Push a New Student
// =================================================================
// Use .push() and your createStudent() function to add a 5th student.
// Then call printRoster() again — no changes to the function needed!

// TODO (stretch): push a new student into the students array
// students.push(createStudent( ??? ))

// console.log("\n--- Stretch: Updated Roster ---");
// printRoster(students);

// EXTRA STRETCH:
// Rewrite printRoster() using Object.entries() so it prints every
// property of each student dynamically — even if you add a new property later.
