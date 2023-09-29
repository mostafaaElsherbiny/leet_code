///longCommonSubstring

function longSubstringWithoutRepeat(s: string): string {
  let longest = "";
  let current = "";
  let i = 0;
  let j = 0;
  while (i < s.length) {
    const char = s[i];
    if (current.includes(char)) {
      if (current.length > longest.length) {
        longest = current;
      }
      current = "";
      j++;
      i = j;
    } else {
      current += char;
      i++;
    }
  }
  return longest;
}
console.log(longSubstringWithoutRepeat("abcabcbb"));
