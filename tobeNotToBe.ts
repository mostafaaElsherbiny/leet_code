var expect = function (val: number) {
  return {
    toBe: (v: number) => {
      if (v !== val) throw new Error("Not Equal");
      return true;
    },
    notToBe: (v: number) => {
      if (v === val) throw new Error("Equal");
      return true;
    },
  };
};

console.log(expect(1).toBe(1));
