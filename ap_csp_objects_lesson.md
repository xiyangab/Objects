Name: ______________________________

# AP CSP — JavaScript: Objects

---

## The Problem — Why Do We Need Objects?

Imagine storing information about three students using what you already know:

```js
// Without objects — one variable per piece of data
let name1 = "Jane";
let grade1 = 11;
let gpa1 = 3.8;

let name2 = "ChenZee";
let grade2 = 12;
let gpa2 = 3.5;

let name3 = "Dakota";
let grade3 = 10;
let gpa3 = 3.9;
```

> **Discussion:** What problems do you see with this approach?
> What happens when you need to add a 4th student? A 10th?

---

## SECTION 1 — OBJECT ANATOMY

| **Concept** | **Explanation & How to Implement │ Connections to Prior Knowledge** |
| --- | --- |
| **What is an Object?** | |
| **Key–Value Pairs** | |
| **Dot Notation (`obj.key`)** | |
| **Bracket Notation (`obj["key"]`)** | |
| **Adding / Updating a Property** | |
| **Deleting a Property** | |
| **Checking if a Key Exists (`in` operator)** | |

```js
const student = {
  name: "Jane",
  grade: 11,
  gpa: 3.8,
  isHonors: true
};

console.log(student.name)
```
To access properties of an object we use dot notation
---

## SECTION 2 — ARRAYS OF OBJECTS

Here is the refactored version using an **array of objects** — one structure holds all three students:

```js
const students = [
  { name: "Jane",    grade: 11, gpa: 3.8, isHonors: true  },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota",  grade: 10, gpa: 3.9, isHonors: true  }
];
```

| **Concept** | **Explanation & How to Implement │ Connections to Prior Knowledge** |
| --- | --- |
| **Why Store Objects in an Array?** | |
| **Accessing an Object in an Array (`arr[i].key`)** | |
| **How many students are in the array? (`students.length`)** | |
| **Adding a new student (`.push()`)** | |

### Reading the Array — Try These

```js
// What does each line print?
console.log(students[0].name);        // → ____________
console.log(students[1].gpa);         // → ____________
console.log(students[2].grade);       // → ____________
console.log(students.length);         // → ____________
```

---

## SECTION 3 — ITERATING OVER AN ARRAY OF OBJECTS

| **Concept** | **Explanation & How to Implement │ Connections to Prior Knowledge** |
| --- | --- |
| **`.forEach()` — Do Something for Each Item** | |
| **`.filter()` — Keep Items That Match a Condition** | |
| **`.map()` — Transform Each Item into Something New** | |
| **`.find()` — Get the First Match** | |

### forEach — Print Every Student's Name

```js
students.forEach(function(student) {
  console.log(student.name + " is in grade " + student.grade);
});
```

*What will this print? Write the output below:*

```
→
→
→
```

### filter — Only Honors Students

```js
const honorsStudents = students.filter(function(student) {
  return student.isHonors === true;
});

console.log(honorsStudents.length); // → ____________
```

*Which students are in `honorsStudents`?* ____________________________________________

### Arrow Function Shorthand

The two examples above can be rewritten with arrow functions:

```js
// forEach with arrow function
students.forEach(s => console.log(s.name));

// filter with arrow function
const honors = students.filter(s => s.isHonors);
```

---

## SECTION 4 — ITERATING THROUGH A SINGLE OBJECT

Sometimes you don't want to loop over an *array* of objects — you want to loop over the **keys and values inside one object**. JavaScript gives you three built-in methods for this.

| **Concept** | **Explanation & How to Implement │ Connections to Prior Knowledge** |
| --- | --- |
| **`Object.keys(obj)` — Get all keys** | |
| **`Object.values(obj)` — Get all values** | |
| **`Object.entries(obj)` — Get [key, value] pairs** | |
| **Destructuring in a loop `([key, value])` syntax** | |

### The Same Object, Three Ways

```js
const student = {
  name: "Jane",
  grade: 11,
  gpa: 3.8,
  isHonors: true
};
```

**`Object.keys()`** — returns an array of just the property names:

```js
console.log(Object.keys(student));
// → ["name", "grade", "gpa", "isHonors"]
```

**`Object.values()`** — returns an array of just the values:

```js
console.log(Object.values(student));
// → ["Jane", 11, 3.8, true]
```

**`Object.entries()`** — returns an array of `[key, value]` pairs:

```js
console.log(Object.entries(student));
// → [["name", "Jane"], ["grade", 11], ["gpa", 3.8], ["isHonors", true]]
```

### Looping With `Object.entries()`

Use `.forEach()` with **destructuring** to get the key and value in one clean step:

```js
Object.entries(student).forEach(([key, value]) => {
  console.log(key + ": " + value);
});
```

*Write the output below:*

```
→ ______________________
→ ______________________
→ ______________________
→ ______________________
```

### When Would You Use Each?

| **Method** | **Use it when you need to…** |
| --- | --- |
| `Object.keys()` | Check what properties exist, or loop over just the names |
| `Object.values()` | Work with the values only (e.g. sum all numbers) |
| `Object.entries()` | Work with both the key and the value at the same time |

```

---



**Practice File:** `practice_08_objects_students.js` — complete all TODOs after the lesson.

---

# Problem Set — JavaScript Objects

Work through these in order. Each one builds on the idea before it. Test every function with more than one input — don't just check the example call.

## Problem 1 — Reading Object Properties

You are given this object:

```js
const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169
};
```

Write code (no function needed) to:
1. Print the movie title to the console
2. Print the director's name
3. Print `true` if the runtime is over 120 minutes, `false` otherwise
4. Add a new property `watched` and set it to `true`
5. Print all the keys and values using `console.log("Title:", movie.title)` style

---

## Problem 2 — Build Your Own Object

Write a function `createStudent(name, grade, gpa)` that:
- Returns an object with those three properties
- Also includes a property `isHonors` that is `true` if `gpa >= 3.5`, `false` otherwise

```js
console.log(createStudent("Alex", 11, 3.7));
// → { name: "Alex", grade: 11, gpa: 3.7, isHonors: true }

console.log(createStudent("Sam", 10, 2.9));
// → { name: "Sam", grade: 10, gpa: 2.9, isHonors: false }
```

---

## Problem 3 — Searching an Array of Objects

You are given the `students` array from the lesson. Write a function `findByName(students, targetName)` that:
- Uses `.find()` to return the student object with the matching name
- Returns `null` if no student is found

```js
console.log(findByName(students, "ChenZee"));
// → { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false }

console.log(findByName(students, "Marcus"));
// → null
```

**Hint:** `.find()` returns `undefined` if nothing matches — use `?? null` or an `if` check to return `null` instead.

---

## Problem 4 — Roster Report

Write a function `printRoster(students)` that uses `.forEach()` to print each student in this format:

```
[Grade 11] Jane — GPA: 3.8 ★
[Grade 12] ChenZee — GPA: 3.5
[Grade 10] Dakota — GPA: 3.9 ★
```

The `★` appears only if `isHonors` is `true`.

**Hint:** Use a ternary inside the template literal: `` `${student.isHonors ? "★" : ""}` ``

---

## Problem 5 — Object Inspector

Write a function `inspectObject(obj)` that uses `Object.entries()` to print every key–value pair of any object passed to it, in this format:

```
name → Jane
grade → 11
gpa → 3.8
isHonors → true
```

Then call it on **two different objects** — the `student` from Section 1 and the `movie` from Problem 1. It should work on both with zero changes to the function.

**Hint:** `Object.entries(obj).forEach(([key, value]) => { ... })`

---

## Problem 6 — Sum the Values

Write a function `sumValues(obj)` that:
- Uses `Object.values()` to get all the values of an object
- Adds up only the values that are numbers (use `typeof value === "number"`)
- Returns the total

```js
const scores = { math: 92, english: 85, history: 78, name: "Alex" };
console.log(sumValues(scores)); // → 255  (skips "Alex")
```

**Hint:** Start with a `total` variable at 0, loop through the values, and add each one that passes the `typeof` check.

---

### Stretch (optional)

Add a fifth student to the `students` array using `.push()` and your `createStudent()` function from Problem 2. Then call `printRoster()` again — it should automatically include the new student with no changes to the function.


