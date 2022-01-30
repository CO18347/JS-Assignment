let array = [
  { name: 'xyz', age: 10 },
  { name: 'ert', age: 4 },
  { name: 'mvm', age: 45 },
  { name: 'rere', age: 56 },
];
let arraytwo = [
  { name: 'fdcd', age: 32 },
  { name: 'ter', age: 1 },
  { name: 'fdfg', age: 3 },
  { name: 'gfdgd', age: 15 },
];

// assignment to merge two arrays and sort in ascending and descending order
const mergearray = [...array, ...arraytwo]; //merges the two array

//Method 1 to sort in ascending order
function compare(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}
mergearray.sort(compare);

console.log(mergearray); //ascending order

// Method 2 to sort in descending order
mergearray.sort((a, b) => b.age - a.age);

console.log(mergearray); //descending order
