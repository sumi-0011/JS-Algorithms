function solution(numbers) {
  const numberArr = [...numbers];
  let answer = 0;

  const allNumbers = [...getAllNumbers(numberArr)];

  allNumbers.map((number) => {
    if (isPrime(number)) answer++;
  });

  return answer;
}

function isPrime(number) {
  if (number === 0 || number === 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function getAllNumbers(numberArr) {
  const result = [];

  for (let numberLen = 1; numberLen <= numberArr.length; numberLen++) {
    permutation(numberArr, numberLen, [], result);
  }

  return new Set(result);
}

function permutation(arr, n, bucket, result) {
  if (n === 0) {
    result.push(+bucket.join(""));
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    const rest = arr.slice();
    const pick = rest.splice(i, 1);
    permutation(rest, n - 1, bucket.concat(pick), result);
  }

  return result;
}
