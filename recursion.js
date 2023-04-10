const changeFunc = (input, coinsVal) => {
  const defCoins = { // define defCoins object which will set the default values of q, d, n, p.
    q: 0,
    d: 0,
    n: 0,
    p: 0
  }

  const coins = coinsVal || defCoins; // define a variable coins as either the argument 'coinsVal' passed into the function or if that does not exist equal to 'defCoins'.

  const value = coins.q * .25 + coins.d * .1 + coins.n * .05 + coins.p * .01; // define the variable value.
  if (value < input) { // check if the value of all coins is already equal to the desired input value.
    if (value + .25 <= input) { // check if the value of all coins will be greater than the desired input amount if we add one more quarter, dime, nickel or penny. If not, proceed to add one more of that coin to coins.
      coins.q += 1
      return changeFunc(input, coins);
    } else if (value + .1 <= input) {
      coins.d += 1
      return changeFunc(input, coins);
    } else if (value + .05 <= input) {
      coins.n += 1
      return changeFunc(input, coins);
    } else if (value + .01 <= input) {
      coins.p += 1
      return changeFunc(input, coins);
    }
  } else {
    return (`Your change is: ${coins.q} quarters, ${coins.d} dimes, ${coins.n} nickels, ${coins.p} pennies`);
  }
}


changeFunc(4.99);





