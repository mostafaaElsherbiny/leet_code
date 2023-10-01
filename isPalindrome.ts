/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s: string): string {
  let reverse = "";
  // remove all non-alphanumeric characters
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  for (let i = s.length - 1; i >= 0; i--) {
    reverse += s[i];
  }
  return reverse == s;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
