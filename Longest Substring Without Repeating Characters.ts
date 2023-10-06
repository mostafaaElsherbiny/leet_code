function lengthOfLongestSubstring(s: string): number {
  let charMap = new Map();

  let length = 0;

  let leftIndex = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (charMap.has(char) && charMap.get(char) >= leftIndex) {
      leftIndex = charMap.get(char) + 1;
    }
    length = Math.max(length, right - leftIndex + 1);
    charMap.set(char, right);
  }
  return length;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
