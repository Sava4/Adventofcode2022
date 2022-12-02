const input = `A Y
B X
C Z`


const parseInput = input.split('\n').map(pair => pair.split(' ')) //?

// A rock
// B paper
// C scissors
// MY X rock
// MY Y paper
// MY Z scissors

function decideScore([op, me]) {
    let score = 0
    const iLost = 0
    const draw = 3
    const iWin = 6
    const rock = 1
    const paper = 2
    const scissors = 3
    if(me === 'X') {
        score += iLost
    }
    if(me === 'Y') {
        score += draw
    }
    if(me === 'Z') {
        score += iWin
    }

    if(op === 'A' && me === 'Y') {
        score += rock
    }
    if(op === 'B' && me === 'Y') {
        score += paper
    }
    if(op === 'C' && me === 'Y') {
        score += scissors
    }
    if (op === 'A' && me === 'X') {
        score += scissors
    }
    if (op === 'A' && me === 'Z') {
        score += paper
    }
    if (op === 'B' && me === 'X') {
        score += rock
    }
    if (op === 'B' && me === 'Z') {
        score += scissors
    }
    if (op === 'C' && me === 'X') {
        score += paper
    }
    if (op === 'C' && me === 'Z') {
        score += rock
    }
    return score
} 

const rounds = parseInput.map(pair => decideScore(pair))
const result = rounds.reduce((pre,cur) => pre + cur) //? 12