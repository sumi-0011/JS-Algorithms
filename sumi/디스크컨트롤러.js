function solution(jobs) {
  var answer = 0;
  let needJobs = jobs.sort((a, b) => a[0] - b[0]);
  let cnt = 0;

  while (needJobs.length !== 0) {
    //현재 시간에 가능한 것중 수행시간이 가장 짧은것을 처리
    let possible = needJobs.filter((x) => x[0] <= cnt);
    const sortArray = possible.sort(sort1Index);
    if (sortArray.length > 0) {
      minJob = sortArray[0];
      cnt += minJob[1]; //수행시간 더하기
      answer += cnt - minJob[0]; //요청~종료시간
      needJobs = needJobs.filter((x) => x != minJob);
    } else {
      cnt++;
    }
  }
  return parseInt(answer / jobs.length);
}
function sort1Index(a, b) {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
}
