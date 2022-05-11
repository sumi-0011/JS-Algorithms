function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let x in completion) {
    if (completion[x] != participant[x]) {
      return participant[x];
    }
  }
  return participant[participant.length - 1];
}
