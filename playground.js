const maleNames = ["John", "Richard", "James"];
const femaleNames = ["Sharleen", "Jennifer", "Britney"];

const allNames = ["DBLOCK", "STOMPER", ...maleNames, femaleNames];
console.log(allNames);

let greetMessage = "Hello ";
let name = "Richard";
const reuslt = greetMessage.concat(name);
console.log(reuslt);
