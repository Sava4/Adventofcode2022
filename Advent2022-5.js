import chunk from 'lodash/chunk'
const input = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

const moves = input.split('\n').map(move => Object.fromEntries(chunk(move.split(' '),2).map(([cmd,num]) => [cmd, Number(num)]))) //?

const crates = [['N', 'Z'], ['D', 'C', 'M'], ['P']]

moves.forEach(mv => {
    for (let i = mv.move; i > 0; i--) {
        const crateToMove = crates[mv.from - 1].shift()
        crates[mv.to - 1].unshift(crateToMove)
    }
})

console.log('Result: ', crates.map(stack => stack[0]).join('')) //? CMZ