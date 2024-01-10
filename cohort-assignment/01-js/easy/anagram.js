/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;

    if(n1 != n2){
        return false;
    }

    // create map of each character to count
    const char_count_map = new Map();
    for (var i = 0; i < n1; i++){
        let char = str1[i].toUpperCase();
        if (!char_count_map.get(char))
            char_count_map.set(char, 1);
        else
        {
            char_count_map.set(char, char_count_map.get(char) + 1);
        }
    }

    for (var i = 0; i < n2; i++){
        if(char_count_map.has(str2[i].toUpperCase()) == false)
            return false;
        char_count_map[str2[i].toUpperCase()]--;
    }

    char_count_map.forEach((values, keys) => {
        if(keys != 0)
            return false;
    });
    return true;
}

module.exports = isAnagram;