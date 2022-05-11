function solution(number, k) {
  const arr = []; // stack

  for (let i = 0; i < number.length; i++) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k--;
      arr.pop(); // 현재 값과 스택 최상단 값과 비교하여 현재 값이 더 크면 pop 해줌
    }
    arr.push(number[i]);
  }

  arr.splice(number.length - k, k); // 54321 과 같은 값은 위 코드에서 Pop 될 일이 없기 때문에 이 경우롤 위해 길이를 맞춰줌
  return arr.join("");
}
