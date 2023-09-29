var expect = function (val) {
  return {
    toBe: (v) => {
      if (v !== val) throw new Error("Not Equal");
      return true;
    },
    notToBe: (v) => {
      if (v === val) throw new Error("Equal");
      return true;
    },
  };
};

console.log(expect(1).toBe(2));
