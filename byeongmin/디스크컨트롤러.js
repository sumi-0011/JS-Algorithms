function solution(jobs) {
  const pq = [];
  let answer = 0;

  jobs.sort((u, v) => u[0] - v[0]);

  let i = 0;
  let len = jobs.length;
  let now = 0;

  while (i < len || pq.length > 0) {
    if (i < len && jobs[i][0] <= now) {
      pq.push(jobs[i++]);
      continue;
    }

    pq.sort((u, v) => u[1] - v[1]);

    if (pq.length > 0) {
      const [reqTime, time] = pq.shift();
      now += time;
      answer += now - reqTime;
    } else {
      now = jobs[i][0];
    }
  }

  return Math.floor(answer / len);
}
