// function longCommonPrefix(items: string[]): string {
//   let prefix: string = "";
//   let firstItem: string = items[0];
//   let firstItemLength: number = firstItem.length;
//   for (let i = 0; i < firstItemLength; i++) {
//     let char: string = firstItem[i];
//     for (let j = 1; j < items.length; j++) {
//       let item: string = items[j];
//       if (item[i] !== char) {
//         return prefix;
//       }
//     }
//     prefix += char;
//   }
//   return prefix;
// }

function longCommonPrefix(strings: string[]): string {
  if (strings.length === 0) {
    return "";
  }
  if (strings.length === 1) {
    return strings[0];
  }

  let possiblePrefix = "";

  while (strings.every((str) => str.startsWith(possiblePrefix))) {
    const newPossiblePrefix = strings[0].substr(0, possiblePrefix.length + 1);
    if (newPossiblePrefix.length > possiblePrefix.length) {
      possiblePrefix = newPossiblePrefix;
    } else if (newPossiblePrefix.length === possiblePrefix.length) {
      return possiblePrefix;
    } else {
      break;
    }
  }
  return possiblePrefix.slice(0, -1);
}

let items: string[] = ["flower", "flow", "flight"];

console.log(longCommonPrefix(items));
