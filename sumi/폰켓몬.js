function solution(nums) {
  var answer = 0;
  const obj = {};
  //종류에 따른 포켓몬 개수 카운트
  for (let num of nums) {
    if (num in obj) obj[num] += 1;
    else obj[num] = 1;
  }

  const kindCount = Object.keys(obj).length;

  return parseInt(nums.length / 2) > kindCount
    ? kindCount
    : parseInt(nums.length / 2);
}
