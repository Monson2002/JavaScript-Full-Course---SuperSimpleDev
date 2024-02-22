// Q1
const nums = [10,20,30];
nums[2] = 99;
console.log(nums);

// Q2
function getLastValue(array) {
  return array[array.length-1];
}
console.log(getLastValue([2,13,41,43,5,4]));
console.log(getLastValue(["sng","jsrb","ghs"]));

// Q3
function arraySwap(array) {
  const temp = array[array.length-1];
  array[array.length-1] = array[0];
  array[0] = temp;
  return array;
}
console.log(arraySwap([2,13,41,43,5,4]));
console.log(arraySwap(["sng","jsrb","ghs"]));

// Q4
let count = 0;
for (let index = 0; index <= 10; index += 2) {
  count += index;
}
console.log(count);

// Q5
let reverseCount = 0;
for (let index = 5; index > 0; index--) {
  reverseCount += index;
}
console.log(reverseCount);

// Q6
let whileCount = 0;
let index = 0
while (index <= 10) {
  whileCount += index;
  index += 2;
}
console.log(whileCount);

let whileCount2 = 0;
let index2 = 5;
while (index2 > 0) {
  whileCount2 += index2;
  index2 -= 1;
}
console.log(whileCount2);

// Q7
const oldArray = [1,2,3,4,5,6];
const newArray = oldArray.map((el) => {
  return el+1;
})
console.log(newArray);

// Q8
function addOne(array) {
  return array.map((el) => {
    return el+1;
  })
}
console.log(addOne(oldArray));

// Q9
function addNums(array, number) {
  return array.map((el) => {
    return el+number;
  })
}
console.log(addNums(oldArray, 2));

// Q10
function addArrays(array1, array2) {
  const newArray = [];
  for (let index = 0; index < array1.length; index++) {
    const element1 = array1[index];
    const element2 = array2[index];
    const sum = element1+element2;
    newArray.push(sum);
  }
  return newArray;
}
console.log(addArrays(oldArray, addNums(oldArray, 3)));

// Q11
function countPositive(array) {
  let negatives = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element < 1) {
      negatives++;
    }
  }
  return negatives;
}
console.log(countPositive([-45,13424,51065,603563565,-356,5,-6,1,-23]));

// Q12, Q13
function minMax(array) {
  if (array.length === 0) {
    return {
      min: null,
      max: null
    }
  }
  let minNum = array[0];
  let maxNum = array[0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element < minNum) {
      minNum = element;
    }
    else if (element > maxNum) {
      maxNum = element;
    }
  }
  return {
    min: minNum,
    max: maxNum
  };
}
console.log(minMax(oldArray));
console.log(minMax([3]));
console.log(minMax([]));

// Q14
function countWords(array) {
  const fruitCount = {};
  for (const key of array) {
    if (fruitCount.hasOwnProperty(key)) {
      const element = fruitCount[key];
      fruitCount[key]++;
    }else{
      fruitCount[key] = 1;
    }
  }
  return fruitCount;
}
console.log(countWords(["apple","mango","apple","orange","mango","guava"]));
