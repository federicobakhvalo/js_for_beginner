var map = function (arr, fn) {
  array = [];
  for (let i = 0; i < arr.length; i++) {
    array[i] = fn(arr[i], i);
  }
  return array;
};
console.log(
  map([1, 2, 4, 5], function (n, i) {
    return 42;
  })
);
