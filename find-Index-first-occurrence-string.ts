function strStr(haystack: string, needle: string): number {
  let index = -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) == needle) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(strStr("leetcode", "leeto"));
