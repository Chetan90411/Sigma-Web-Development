use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany(
    [
        {
          "name": "Java",
          "price": 20000,
          "instructor": "Harry"
        },
        {
          "name": "Python",
          "price": 18000,
          "instructor": "Alice"
        },
        {
          "name": "C++",
          "price": 25000,
          "instructor": "Bob"
        },
        {
          "name": "JavaScript",
          "price": 22000,
          "instructor": "Charlie"
        }
      ]
      
);


console.log('Done inserting data');
