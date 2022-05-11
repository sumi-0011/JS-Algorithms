function solution(numbers) {
  var answer = 0;
  const numberList = numbers.split("");
  const permutations = [...numberList.map(n => parseInt(n))];
  
  for(let i=2;i<=numberList.length;i++) {
      const permutation =  getPermutations(numberList,i).map(el => parseInt(el.join("")))
      permutations.push(...permutation);
  }
  const result = permutations.filter(n =>isPrime(n) )
  const resultUnique = [...new Set(result)];
  
  return resultUnique.length;
}
//소수 찾기 알고리즘
const isPrime = (n) => {
  
if (n <= 1) {  //1이하는 소수가 아님
  return false;
}
if (n === 2 || n === 3) {
  return true;
}
if (n % 2 === 0) {    //짝수면 소수가 아님
  return false;
}
// n의 거듭제곱근 이상의 수는 소수가 아니다. 
let divisor = 3;
let limit = Math.sqrt(n);
while (limit >= divisor) {
  if (n % divisor === 0) {
    return false;
  }
  divisor += 2;
}
return true;
}
//순열 함수
const getPermutations= function (arr, selectNumber) {
const results = [];
if (selectNumber === 1) return arr.map((value) => [value]); 

arr.forEach((fixed, index, origin) => {
  const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
  const permutations = getPermutations(rest, selectNumber - 1);
  const attached = permutations.map((permutation) => [fixed, ...permutation]); /
  results.push(...attached); /
});

return results; // 결과 담긴 results return
};