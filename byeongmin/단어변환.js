function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const graph = {};

  const myWords = [...words, begin];

  for (let i = 0; i < myWords.length; i++) {
    const current = myWords[i];
    myWords.map((word, idx) => {
      if (isSimilar(current, word)) {
        graph[word] = graph[word] ? [...graph[word], current] : [current];
      }
    });
  }

  return dfs(graph, begin, target);
}

function isSimilar(word1, word2) {
  const alphabets = {};

  word1.split("").map((alpha) => {
    alphabets[alpha] = alphabets[alpha] ? alphabets[alpha] + 1 : 1;
  });

  word2.split("").map((alpha) => {
    if (alphabets[alpha]) {
      alphabets[alpha] -= 1;
    }
  });

  const sum = Object.values(alphabets).reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });

  return sum === 1 ? true : false;
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
