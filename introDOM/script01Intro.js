// * important
// ! Deprecated
// ? Query
// TODO:
//
// * Without Indent Dots --> ctrl+shift+p > type: toggle render whitespace
//
// let change = document;
// change.body.children[0].children[0].innerHTML = "Hello World";
// console.log(document.body.children[0].children[0]);

// TODO:--> find the text word -- window.find("textName")
// console.log(window.find("DOM"));

// Normal Object and method
const person = {
  name: "Praveen",
  place: "Ariyamangalam",
  welcome: function () {
    return `Hello my dear friend ${this.name}, your from ${this.place}`;
  }
};

person.name = "kishor";
person.place = "Trichy";

const person01 = person.welcome();
console.log(person01);

// TODO:--> -- document.write(variableName);
// document.write(person01);

//
// document.body.innerText = person01;
// ! not working .innerText - why?
// * Ans : innerText is return only text content so not added by tag
// ! document.body.innerText = `<h1>${person01}</h1>`;
// Add normal method to page
// document.body.innerHTML = `<h2>${person01}</h2>`;

// interactive page used to prompt built in function and innerHTML
let interactiveName = prompt("Enter your name : ");
let interactivePlace = prompt("Enter your Place : ");
//
person.name = interactiveName;
person.place = interactivePlace;
// ? many steps
// document.body.innerHTML = `<h1>${person.welcome()}</h1>`;
// ? code sort
// document.write(`<h2>${person.welcome()}</h2>`);

// * innerText - returns all text contained by an element and all its child elements.
// * innerHTML - returns all text, including html tags, that is contained by an element.

//
