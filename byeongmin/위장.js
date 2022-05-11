function solution(clothes) {
  const combination = {};

  clothes.map((element, _) => {
    const [_, type] = element;
    combination[type] = combination[type] ? combination[type] + 1 : 1;
  });

  let answer = 1;

  Object.entries(combination).map((element) => {
    const [_, count] = element;
    answer *= count + 1;
  });

  return answer - 1;
}
