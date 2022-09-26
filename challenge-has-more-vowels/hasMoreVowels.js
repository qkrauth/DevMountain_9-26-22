// Concepts: Loops, Conditionals

// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains
// more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces.
// It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
// false

////////// CODE HERE //////////

function hasMoreVowels(word) {
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
            vowelCount ++;
        }
    }
    return vowelCount;  // returns vowel count
}
console.log(hasMoreVowels("gay"));

////////// SOLUTION //////////

let hasMoreVowels2 = word2 => {
    console.log(word2.match(/[aeiou]/gi))
}
hasMoreVowels2("gay"); // returns an array of vowels in word2

////////// SOLUTION 2 //////////

let hasMoreVowels3 = word3 => {
    let vowelCount3 = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let char of word3) {
        if (vowels.includes(char)) {
            vowelCount3++;
        }
    }
    return vowelCount3 > word3.length/2
}
console.log(hasMoreVowels3("gay")); // returns true or false if word has more vowels



