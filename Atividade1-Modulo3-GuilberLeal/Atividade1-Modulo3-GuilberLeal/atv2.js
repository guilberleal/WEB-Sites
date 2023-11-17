const array = [3, 9, 6];
const array2 = new Array(3);

for (let i = 0; i < array2.length; i++) {
  array2[i] = array;
}

console.log(array2)

for (let i = 0; i < array2.length; i++) {
  for (let j = 0; j < array2[i].length; j++) {
    console.log(i, j)
  }
}
