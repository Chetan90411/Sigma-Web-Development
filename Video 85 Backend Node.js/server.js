var slugify = require("slugify");

const a = slugify("some string"); // some-string
console.log(a);

// if you prefer something other than '-' as separator
const b = slugify("some other string with some other separator", "_"); // some_string
console.log(b);
