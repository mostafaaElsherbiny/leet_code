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

console.log(productExceptSelf([1, 2, 3, 4]));
