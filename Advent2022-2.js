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
    if(me === 'X') {
        score += 1
    }
    if(me === 'Y') {
        score += 2
    }
    if(me === 'Z') {
        score += 3
    }

    if(op === 'A' && me === 'X') {
        score += draw
    }
    if(op === 'B' && me === 'Y') {
        score += draw
    }
    if(op === 'C' && me === 'Z') {
        score += draw
    }
    if (op === 'A' && me === 'Z') {
        score += iLost
    }
    if (op === 'A' && me === 'Y') {
        score += iWin
    }
    if (op === 'B' && me === 'X') {
        score += iLost
    }
    if (op === 'B' && me === 'Z') {
        score += iWin
    }
    if (op === 'C' && me === 'X') {
        score += iWin
    }
    if (op === 'C' && me === 'Y') {
        score += iLost
    }
    return score
} 

const rounds = parseInput.map(pair => decideScore(pair))
const result = rounds.reduce((pre,cur) => pre + cur) //? 15