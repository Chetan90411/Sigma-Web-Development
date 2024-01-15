// CRUD Operations
use("CrudDb");

// CREATE
// db.createCollection("courses");

// db.courses.insertOne({
//   name: "Harrys web dev free course",
//   price: 0,
//   assignments: 12,
//   projects: 45,
// });

// db.courses.insertMany([
//   {
//     name: "Programming Basics",
//     price: 0,
//     assignments: 8,
//     projects: 20,
//   },
//   {
//     name: "Advanced JavaScript",
//     price: 0,
//     assignments: 15,
//     projects: 30,
//   },
//   {
//     name: "Responsive Web Design",
//     price: 0,
//     assignments: 10,
//     projects: 25,
//   },
//   {
//     name: "Backend Development with Node.js",
//     price: 0,
//     assignments: 18,
//     projects: 40,
//   },
//   {
//     name: "Frontend Frameworks: React and Vue",
//     price: 0,
//     assignments: 20,
//     projects: 50,
//   },
// ]);

// READ
let a = db.courses.find({price: 0})

// console.log(a) // returns in object format
// console.log(a.count()) // returns the count of documents
// console.log(a.toArray()) // returns the documents in an array

// let b = db.courses.findOne({price: 0})

// console.log(b)

// UPDATE
db.courses.updateOne({price: 0}, {$set: {price: 100}})
db.courses.updateMany({price: 0}, {$set: {price: 1000}})

// DELETE
db.courses.deleteOne({price: 100})
db.courses.deleteMany({price: 1000})
