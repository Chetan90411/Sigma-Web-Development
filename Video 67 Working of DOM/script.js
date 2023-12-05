console.log('Hello World!');

// Nodes can be of many types some are the following:

// Text Node
// a blank space or text is counted as a text node in any element

// Element Node
// any element can form an Element node

// Comment Node
// any comment in the html document is counted as a commment node


// firstChild, lastChild and ChildNodes property

//.childNodes object is used to get access of the child nodes of any element
// document.body.childNodes is used to access the child nodes of body element
// We can also access child node of a child node by using childNodes as follows:
// document.body.childNodes[1].childNodes

// .firstChild and .lastChild will give the first and last node of of any element
// document.body.firstChild will give text node if there is a space in the body element before any other child element

// .firstElementChild will give the first child node which is an html element

let cont = document.body.childNodes[1]; // this will store the .container div element in the cont variable

console.log(cont);
console.log(cont.firstElementChild);

// firstElementChild, lastElementChild

// to change the css for example we can do the following
// cont.lastElementChild.style.backgroundColor = "green" this will make  the last box element of container div have a green background color;
cont.lastElementChild.style.backgroundColor = "green";

// document.body.firstElementChild.children will give the html elements of the first element child of body element

// to access a specific children we can index them
// console.log(document.body.firstElementChild.children[0])
// console.log(document.body.firstElementChild.children[1])

// to access the next element sibling we will add .nextElementSibling
// console.log(document.body.firstElementChild.children[1].nextElementSibling)

// to access the previous element sibling we will add .nextElementSibling
// console.log(document.body.firstElementChild.children[1].previousElementSibling)

// we can also use previous or next sibling but that may give text node if there is a text node present 

// We can also use parent to get the parent
// We can also use parentElement to get parent element

document.body.children[1].style.backgroundColor = "yellow"
