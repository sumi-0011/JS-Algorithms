function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const graph = {};

  const myWords = [...words, begin];

  for (let i = 0; i < myWords.length; i++) {
    const current = myWords[i];
    myWords.map((word, idx) => {
      let cnt = 0;
      for (index in word) {
        if (word[index] !== current[index]) cnt++;
        if (cnt > 1) {
          break;
        }
      }
      if (cnt == 1) {
        graph[word] = graph[word] ? [...graph[word], current] : [current];
      }
    });
  }

  return dfs(graph, begin, target);
}

function dfs(graph, startNode, target) {
  const visited = [];
  let needVisit = [];
  let count = 0;

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      count++;
      needVisit = [...graph[node], ...needVisit];

      if (graph[node].includes(target)) return count++;
    }
  }

  return count;
}
