function solution(number, k) {
  var answer = "";
  let stack = [];
  for (let index in number) {
    // console.log(index)
    while (
      stack.length > 0 &&
      stack[stack.length - 1] < number[index] &&
      k > 0
    ) {
      stack.pop();
      k--;
    }
    stack.push(number[index]);
  }
  //뒤가 작아서 뒤에서 뺴야하는 경우
  stack = stack.slice(0, stack.length - k);
  return stack.join("");
}
