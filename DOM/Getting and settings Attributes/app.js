// href
const a = document.querySelector("a");
console.log(a.href);
// value
const input = document.querySelector("input");
console.log(input.value);
// type
console.log(input.type);

console.log((input.placeholder = "Please Type YourPassword here"));
console.log((input.type = "text"));
a.href = "http://www.google.com";
console.log(a.href);
// setAttribute(attrName, value)
input.setAttribute("placeholder", "write here");
input.setAttribute("type", "password");

// console.log((input.value = "bye"));

// getAttribute(attrName)
console.log(input.getAttribute("placeholder"));
console.log(input.getAttribute("type"));
