//first approach  O(n^2)

function productExceptSelf(nums: number[]): number[] {
  let products: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      product *= nums[j];
    }
    products.push(product);
  }

  return products;
}

// console.log(productExceptSelf([1, 2, 3, 4]));

//second approach O(n)

function productExceptSelf2(nums: number[]): number[] {
  let n = nums.length;

  let result: number[] = [];

  let prefix = 1;

  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}
console.log(productExceptSelf2([1, 2, 3, 4]));
