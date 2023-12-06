console.log("Harry")

// getElementsByClassName()
// getElementsByTagName()
// getElementById()
// querySelector() and querySelectorAll()
// matches(), closest() and contains() methods

// getElements and querySelectorAll returns a list rest returnan element

// When elements are less then we can use parent children node but when there are many elements then we tend to use get element by id or class

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "yellow";

// document.getElementById('redBox').style.backgroundColor = 'red';

// document.querySelector(".box").style.backgroundColor = "green";

// We cannot use the below statement to style all elements as querySelectorAll returns an HTML Collection We have to use for loop to accesss each element and set its style
// document.querySelectorAll(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(element => element.style.backgroundColor = "green");

e = document.getElementsByTagName("div");
console.log(e);


// elem.matches()- to check if a given element matches a given CSS selector
console.log(e[4].matches('#redBox'));

// elem.closest() - to look for the nearest ancestor that matches the given CSS selector, the element itself is also checked. If not found then it returns null 
console.log(e[3].closest('.container'));  // it will return div.container element as it is the closest

// elemA.contains(elemB) - return true if elemB is inside elemA( or a desecdant of elemA) or elemB === elemA else it will return false  
console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(document.body));
