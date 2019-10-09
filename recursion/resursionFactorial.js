let answer = 1;
function findFactorialRecursive(number) {
  if (number >= 1) {
    // console.log(`answer before math ${answer}`);
    answer = answer * number;
    number--;
    // console.log(answer);
    return findFactorialRecursive(number);
  }
  return answer;
}

// ---------- Andrei's solution ---------
function findFactorialRecursive2(number) {
  if (number <= 2) {
    // factorial of anything 2 and below is just the number itself -- and this is a more elegant way to exit than above
    return number;
  }
  return number * findFactorialRecursive2(number - 1);
}
//-----------

findFactorialRecursive(10);

function findFactorialIterative(number) {
  let answer = 1;

  if (number <= 2) {
    // factorial of anything 2 and below is just the number itself -- and this is a more elegant way to exit than above
    return number;
  }

  for (let i = 2; i <= number; i++) {
    //take this number and multiply by the last number's product
    answer = i * answer;
  }
  return answer;
}

findFactorialIterative(5);
