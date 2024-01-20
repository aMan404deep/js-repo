const name = "Amandeep"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Amandeephc') //string is an object (not array)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

