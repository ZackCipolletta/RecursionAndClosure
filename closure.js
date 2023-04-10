const changeFunc = (input, coins) => {
  const defCoins = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  }

  coins = coins || defCoins;

  value = coins.q * .25 + coins.d * .1 + coins.n * .05 + coins.p * .01;

  if (value < input) { // check if value is less than input if so then skip this.
    const calcVal = (coin) => {
      coins[coin] += 1;
      return changeFunc(input, coins);
    };

    if (value + .25 <= input) {
      return calcVal('q');
    } else if (input + .1 <= input) {
      return calcVal('d');
    } else if (value + .05 <= input) {
      return calcVal('n');
    } else if (value + .01 <= input) {
      return calcVal('p');
    }
  } else {
    return (`Your change is: ${coins.q} quarters, ${coins.d} dimes, ${coins.n} nickels, ${coins.p} pennies`);
  }
}