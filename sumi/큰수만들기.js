function solution(number, k) {
  var answer = "";
  let numbers = number.split(""); //내림차순 정렬
  let findNumber = numbers.length - k;

  while (findNumber < numbers.length && findNumber > 0) {
    // const maxLimit = k < k-answer.length ? k+1: k-answer.length+1;
    //선택 가능한 것중 최대
    const current = numbers.slice(0, numbers.length - findNumber + 1);
    const max = Math.max(...current);
    const maxIndex = numbers.indexOf(max + "");
    numbers = numbers.slice(maxIndex + 1);
    answer += max;
    findNumber--;
  }
  if (findNumber) {
    answer += numbers.join("");
  }
  return answer;
}
