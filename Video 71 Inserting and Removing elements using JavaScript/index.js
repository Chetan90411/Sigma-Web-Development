// innerHTML will get the content inside the html
console.log('\ninnerHTML: ');
console.log(document.querySelector('.container').innerHTML);
console.log(document.querySelector('.box').innerHTML);

// innerText will get the text inside the html element
console.log('\ninnerText: ');
console.log(document.querySelector('.container').innerText);
console.log(document.querySelector('.box').innerText);

// outerHTML will get the content along with the tags of the element
console.log('\nouterHTML: '); 
console.log(document.querySelector('.container').outerHTML);
console.log(document.querySelector('.box').outerHTML);

// tagName will get the tag name of the selected element
console.log('\ntagNage: ');
console.log(document.querySelector('.container').tagName);
console.log(document.querySelector('.box').tagName);

// nodeName will get the node name of the selected element which includes comment node and text node
console.log('\ntagNage: ')
console.log(document.querySelector('.container').nodeName);
console.log(document.querySelector('.box').nodeName);

// textContent wiil get the inner text will of the element oly text minus all tags
console.log('\ntextContent: '); 
console.log(document.querySelector('.container').textContent);

// hidden attribute of element can hide an element if it is set to true
console.log('\nhidden: ');
console.log(document.querySelector('.container').hidden); // this will display false as hidden attribute is set to false by default
// document.querySelector('.container').hidden = true;  this will hide the .container div
// console.log(document.querySelector('.container'));


// We can also change the inside content of an element using innerHTML 
document.querySelector('.box').innerHTML = "Hey I am Harry"; // this statement will select only the first query with .box class

// attributes is used to get attributes of any element and can be used in browser 
// document.querySelector('.box'),attributes

// hasAttribute is used to check whether an attribute is present in an element
console.log('\nhasAttribute(): ');
console.log(document.querySelector('.box').hasAttribute('style'));

// getAttribute is used to get the attribute of a particular element
console.log('\ngetAttribute(): ');
console.log(document.querySelector('.box').getAttribute('style'));

// setAttribute is used to set an attribute of a particular element
console.log('\nsetAttribute(): to display inline');
document.querySelector('.box').setAttribute('style', 'display: inline')
console.log(document.querySelector('.box').getAttribute('style')); 

// designMode = "on" this will allow you to edit any content of a any website if written in console

// data-xyz = "abc" data attribute can be assigned to any element it provides any data we like
// we can access the data attributes using .dataset 

// **********************************************

// Insertion methods

// append() - to insert an element to the end inside an node
// prepend() - to insert element at the begining inside an node 
// before() - insert before node
// after() - insert after node
// node.replaceWith() - replace node with a given node


let div = document.createElement('div');
div.innerHTML = "I have been inserted <b>by Harry</b>";
div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").replaceWith(div);


// insertAdjacentHTML/Text/Element(argument1, argument2) - argument1 specifies where to insert the HTML and argument2 is an HTML string. 

// argument1 can be any of the following:
// "beforebegin" - insert immediately before element
// "afterbegin" - insert into the element at the beginning
// "beforeend" - insert at the end before the closing tag of the element
// "afterend" - insert immediately after the element


let cont = document.querySelector('.container');
// cont.insertAdjacentHTML("afterend", "<b>I am under water. Please help me here too much raining....  iuuuuuooooo</b>")
cont.insertAdjacentHTML("beforebegin", "<b>I am under water. Please help me here too much raining....  iuuuuuooooo</b>")
// cont.insertAdjacentHTML("afterbegin", "<b>I am under water. Please help me here too much raining....  iuuuuuooooo</b>")
// cont.insertAdjacentHTML("beforeend", "<b>I am under water. Please help me here too much raining....  iuuuuuooooo</b>")

// remove() - is used to remove a node
// document.querySelector('.box').remove()
// document.querySelector('.box').remove()

// classList - gives a list of all the class inherited by an element
console.log(document.querySelector('.container').classList);
// className - gives a list of names of all the class inherited by an element
console.log(document.querySelector('.container').className);

// we can also add another class using add() method and remove remove another class using remove()
document.querySelector('.container').classList.add("Harry");
document.querySelector('.container').classList.remove("red");
console.log(document.querySelector('.container').classList);

// toggle is used to toggle if a class is present it will be removed and if it is not present it will be added
document.querySelector('.container').classList.toggle('red') // will add red class 
document.querySelector('.container').classList.toggle('red') // will remove red class
document.querySelector('.container').classList.toggle('red') // will again add red class
