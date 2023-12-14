// The solution to callback hell is Promises.
// A promise is a "promise of code execution"

console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();

    if (a < 0.5) {
        reject('No random number was not supporting you')
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done');
            resolve("Harry")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();

    if (a < 0.5) {
        reject('No random number was not supporting you 2')
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done 2');
            resolve("Harry 2")
        }, 1000);
    }
})

// Promise API

// 6 static methods of Promise class:

// Promise.all() -
// Promise.allSettled() - returns the promise whether resolved or rejected
// Promise.race() - returns the first settled promise
// Promise.any() - returns the first resolved promise
// Promise.resolve()
// Promise.reject()
let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
    console.log(a);
}).catch(err => console.log(err))   

let p4 = Promise.allSettled([prom1, prom2])
p4.then((a) => {
    console.log(a);
}).catch(err => console.log(err))   


// Consumers: then, catch and finally
// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log('error');
// })

// Promise Chaining can be done using then
// We can attach multiple handlers to the then method they will be running independently
