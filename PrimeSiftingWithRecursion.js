function primeSieve(x, sieveArray, primeCheck) {

  const numArr = function (x) { // first create the array of numbers from 2 to x
    let list = [2]
    while ((x - 1) > list.length) {
      list.push(list.length + 2);
    }
    return list;
  }

  const arr = sieveArray || numArr(x); // declare a constant equal to the numArr function which initalized the array of numbers or the argument sieveArray if it is passed into the function call
  const check = primeCheck || 2; // initialize a variable equal to 2 or the argument primeCheck if it is passed into the function call.

  if (check <= x) { // first we want to verify we have not gone over our target number.
    arr.forEach(el => {
      if (el > 2 && Number.isInteger(el / check) && el != check) { // fheck if the given element of our array of numbers results in a whole number when divided by 2 to get rid of all even numbers. Then check if it is divisible by any other number aside from 1 or itself.
        const index = arr.indexOf(el); // if the number is divisible by a number other than 1 or itself we get the index of that number so we can remove it from the array.
        arr.splice(index, 1);
        
      }
    });
    const checkPlus = check + 1; // declare a new constant equal to check, incrementing by 1 so can call the function again and check if each remaining number in the array is divisible by this new number.
    return primeSieve(x, arr, checkPlus)
  }
  console.log(arr)
}