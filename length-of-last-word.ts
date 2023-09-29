function lengthOfLastWord(s: string) {
  let arrayToString = s.trim().split(" ");
  return arrayToString[arrayToString.length - 1].length;
}
console.log(lengthOfLastWord("   fly me   to   the moon  "));
