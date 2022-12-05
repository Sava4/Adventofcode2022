import chunk from 'lodash/chunk'

const input = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

const moves = input.split('\n').map(move => Object.fromEntries(chunk(move.split(' '),2).map(([cmd,num]) => [cmd, Number(num)]))) //?

const crates = [['N', 'Z'], ['D', 'C', 'M'], ['P']]

moves.forEach(mv => {
    const cratesToMove = crates[mv.from - 1].splice(0,mv.move)
    crates[mv.to - 1].unshift(...cratesToMove)
})

console.log('Result ', crates.map(stack => stack[0]).join('')) //? MCD