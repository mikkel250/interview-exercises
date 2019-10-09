// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let answer = 1;
  for (let i = 1; i < n; i++) {
    // remember you have to save the previous answer to add to the current!
    console.log(`answer before: ${answer}`);
    answer = i + (answer - 1);
    console.log(`answer = ${i} + ${answer - 1} = `);
    console.log(`${answer}`);
  }
  return answer;
}

fibonacciIterative(6);

function fibonacciRecursive(n) {
  let i = 0;
  while (i <= n) {
    i++;
    return n + fibonacciRecursive(n + 1);
  }
}

fibonacciRecursive(3);
