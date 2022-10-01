const choiceArr = [
    -3,-2,-1,0,1,2,3
]


function solution(survey, choices) {
    var answer = '';
    const dict = {
        'R' : 0,
        'T' : 0,
        'C' : 0,
        'F' : 0,
        'J' : 0,
        'M' : 0,
        'A' : 0,
        'N' : 0,
    }
    
    for(const index in survey) {
        const [one, two] = survey[index].split('')
        
        const score  = choiceArr[choices[index]-1]
        
        if(score < 0) {
             dict[one] = dict[one] - score
        }
        else {
             dict[two] = dict[two] + score
        }
    }
    console.log(dict)
    
    const t1 = dict['R'] >= dict['T'] ? 'R' : 'T'
    const t2 = dict['C'] >= dict['F'] ? 'C' : 'F'
    const t3 = dict['J'] >= dict['M'] ? 'J' : 'M'
    const t4 = dict['A'] >= dict['N'] ? 'A' : 'N'
    
    
    return t1+t2+t3+t4;
}