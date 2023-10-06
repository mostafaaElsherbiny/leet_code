function findRepeatedDnaSequences(s: string): string[] {
  if (s.length < 10) return [];

  let charMap = new Map();

  let start: number = 0;

  let end: number = 10;

  let res: string[] = [];

  while (end <= s.length) {
    let temp = s.substring(start, end);

    if (charMap.has(temp)) {
      if (charMap.get(temp) == 1) res.push(temp);

      charMap.set(temp, charMap.get(temp) + 1);
    } else {
      charMap.set(temp, 1);
    }

    start++;
    end++;
  }
  return res;
}
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
