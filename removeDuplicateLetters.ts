const removeDuplicateLetters = (s: string): string => {
  const lastIndex: { [char: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.includes(s[i])) continue;

    while (
      stack.length &&
      stack[stack.length - 1].charCodeAt(0) > s.charCodeAt(i) &&
      lastIndex[stack[stack.length - 1]] > i
    ) {
      stack.pop();
    }

    stack.push(s[i]);
  }
  return stack.join("");
};
// if stack still have elements and last element in the stack is greater that current element

console.log(removeDuplicateLetters("aba"));
