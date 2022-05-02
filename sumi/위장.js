function solution(clothes) {
  let dict = {};

  clothes.map((item) => {
    if (item[1] in dict) {
      dict[item[1]] = [item[0], ...dict[item[1]]];
    } else {
      dict[item[1]] = [item[0]];
    }
  });
  let answer = 1;
  for (let key in dict) {
    answer *= dict[key].length + 1;
  }

  return answer - 1;
}
