function solution(begin, target, words) {
  //0509 일자, 30분정도 걸림
  var answer = 0;
  const queue = []; //선입 선출 => bfs
  let wordList = words;
  queue.push([begin, 0]);
  while (queue.length !== 0) {
    //bfs, 큐가 빌때까지 반복
    const [x, count] = queue.shift();
    wordList = wordList.filter((w) => w != x);
    for (word of wordList) {
      let cnt = 0;
      for (index in word) {
        if (word[index] !== x[index]) cnt++;
        if (cnt > 1) {
          break;
        }
      }
      if (cnt == 1) {
        if (word == target) {
          return count + 1;
        }
        queue.push([word, count + 1]);
      }
    }
  }

  return answer;
}
