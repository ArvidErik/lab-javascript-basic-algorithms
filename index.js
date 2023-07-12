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

// Bonus 1:
// Go to the lorem ipsum generator website and:
// Generate 3 paragraphs.Store the text in a new string variable named longText.

const longText = "Sed ut tempus diam. Nam venenatis dolor a molestie porttitor. Curabitur egestas lorem in consectetur blandit. Nunc posuere elementum varius. Pellentesque dignissim faucibus euismod. Proin vitae iaculis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tristique, magna sit amet commodo malesuada, sapien nulla mattis enim, in iaculis arcu mi a sem. Proin sit amet lorem fringilla massa laoreet viverra. Proin laoreet nisl sed ex mattis scelerisque. Suspendisse et tincidunt urna, vitae feugiat ex. Sed scelerisque tincidunt tellus non suscipit. Mauris ornare ut odio et fringilla. Donec mauris orci, auctor faucibus dolor vitae, tempor pellentesque ligula. In tristique augue et finibus cursus. Integer leo enim, vehicula ac felis in, placerat commodo quam. Sed id elementum nisl, non rhoncus justo.Morbi quis tristique lacus, ac pellentesque nibh.Morbi non urna nisl.In volutpat lacinia tortor, in posuere neque sodales vehicula.Suspendisse diam enim, mollis et faucibus sed, cursus quis ante.Donec bibendum neque sit amet ante tempor maximus vitae id dolor.Curabitur mollis diam in ipsum venenatis efficitur sit amet pharetra est.Phasellus dictum accumsan elit non rutrum.Duis justo mi, semper vitae imperdiet ac, tincidunt nec dolor.Aliquam pellentesque felis nec lacus sollicitudin tincidunt in vel neque.Nam pharetra neque eu iaculis aliquam.Sed suscipit tempus ligula id dictum.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed maximus justo. Etiam sed viverra mauris.Curabitur id lobortis tortor, a condimentum orci.Suspendisse quis auctor augue, in iaculis odio.Vestibulum sagittis lobortis felis non elementum.Fusce tristique in velit ac aliquet.Curabitur vel ipsum consectetur, consequat dui non, viverra orci.In vehicula tortor eget hendrerit posuere.Quisque venenatis rhoncus purus id feugiat. Sed elementum condimentum lacus, vitae aliquet lorem tristique nec."

// Make your program count the number of words in the string.

let numberOfWords = longText.split(" ").length + 1;

console.log(`There are ${numberOfWords} words in the longText variable`);

// Make your program count the number of times the Latin word et appears.

let counter = 0;

for (let i = 0; i <= longText.length - 1; i++) {
    if ((longText[i] + longText[i + 1]) == "et") {
        counter++;
    }
}

console.log(`there are ${counter} "et" in the longText.`)



// Create a new variable, phraseToCheck, containing some string value.Write a code to check if the value assigned to this variable is a Palindrome.Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
//     IMPORTANT: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods(such as join(), reverse(), etc.).However, we want you to apply your current knowledge and try to come up with a solution by just using the for loop and if-else statements with some break and continue.

let phraseToCheck = "asgwegwg"

let modPhraseToCheck1 = phraseToCheck.replaceAll(" ", "");
let modPhraseToCheck2 = modPhraseToCheck1.replaceAll(",", "");
let modPhraseToCheck3 = modPhraseToCheck2.replaceAll("?", "");
let modPhraseToCheck4 = modPhraseToCheck3.replaceAll("'", "");

let phreseReverse = "";

for (let i = modPhraseToCheck4.length - 1; i >= 0; i--) {
    phreseReverse += modPhraseToCheck4[i];
}

if (modPhraseToCheck4.toLowerCase() == phreseReverse.toLowerCase()) {
    console.log("This is a Palindrome!")
} else {
    console.log("This is NOT a Palindrome!");
}

