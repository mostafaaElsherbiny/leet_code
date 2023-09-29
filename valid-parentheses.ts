function validParentheses(string: string): boolean {
  let parentheses: { [key: string]: number } = {
    "[": 0,
    "]": 0,
    "{": 0,
    "}": 0,
    "(": 0,
    ")": 0,
  };

  for (const char of string) {
    if (parentheses.hasOwnProperty(char)) {
      parentheses[char] = parentheses[char] + 1;
    }
  }
  if (
    parentheses["["] == parentheses["]"] &&
    parentheses["{"] == parentheses["}"] &&
    parentheses["{"] == parentheses["}"] &&
    parentheses["("] == parentheses[")"]
  ) {
    return true;
  }
  return false;
}

console.log(validParentheses("([)]"));
