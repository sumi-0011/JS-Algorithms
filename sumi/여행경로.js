function solution(tickets) {
  var answer = [];
  // const graph = {};
  // tickets.forEach(t => {
  //     t[0] in graph ? graph[t[0]].push(t[1]) : graph[t[0]] =[ t[1]];
  // })
  // for(let key in graph) {
  //     graph[key].sort();
  // }

  const DFS = (airport, tickets, path) => {
    let newPath = [...path, airport];
    if (tickets.length === 0) {
      answer.push(newPath);
    } else {
      tickets.map((ticket, index) => {
        if (ticket[0] === airport) {
          const copyTicktes = [...tickets];

          const [[from, to]] = copyTicktes.splice(index, 1);

          DFS(to, copyTicktes, newPath);
        }
      });
    }
  };
  DFS("ICN", tickets, []);
  return answer.sort()[0];
}
