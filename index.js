// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

//1.1
const hacker1 = "Erik";
//1.2
console.log(hacker1);
//1.3
const hacker2 = "Arvid";
//1-4
console.log(hacker2);

// Iteration 2: Conditionals

// 2.1.Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters.or
// - It seems that the navigator has the longest name, it has XX characters.or
// - Wow, you both have equally long names, XX characters!.

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
} else if (hacker1Length === hacker2Length) {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
} else {
    console.log("Sorry there is an error!");
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let modName = "";

for (let char of hacker1) {
    modName += char.toUpperCase() + " ";
}
console.log(modName);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first, definitely.
//     What ? !You both have the same name ?
const orderCheck = hacker1.localeCompare(hacker2);

switch (orderCheck) {
    case -1:
        console.log(`The driver's name goes first. Congrats ${hacker1}!`);
        break;

    case 1:
        console.log(`Yo, the navigator goes first, definitely. This is your lucky day ${hacker2}!`);
        break;

    case 0:
        console.log(`What ? !You both have the same name ?`);
        break
    default: console.log("There's an error in the switch")
}