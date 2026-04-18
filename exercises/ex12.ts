// Write a function called areAllCharactersUnique that takes in a string and
// returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated).

const areAllCharactersUnique = (str: string): boolean => {
  const uniqueChars = new Set(str);

  return uniqueChars.size === str.length;
};

export default areAllCharactersUnique;

areAllCharactersUnique("abcdefg"); // Expected result: true
areAllCharactersUnique("abcdefgA"); // Expected result: true
areAllCharactersUnique("programming"); // Expected result: false
areAllCharactersUnique(""); // Expected result: true
areAllCharactersUnique("a"); // Expected result: true
