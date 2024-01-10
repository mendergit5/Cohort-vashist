/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const input_text = str.toUpperCase();
    var count = 0;
    for (var i = 0; i < input_text.length; i++){
        if(input_text[i] === 'A' || input_text[i] === 'E' || input_text[i] === 'I' || input_text[i] === 'O' || input_text[i] === 'U')
            count++;
    }
    return count;
}

module.exports = countVowels;