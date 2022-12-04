import range from 'lodash/range'
const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`


const pairs = input.split('\n').map(pairs => pairs.split(','))

let result = 0

pairs.forEach(([first, second]) => {
    let [firstStart, firstEnd] = first.split('-')
    let [secondStart, secondEnd] = second.split('-')
    const firstRange = range(firstStart, ++firstEnd)
    const secondRange = range(secondStart, ++secondEnd)
    if(firstRange.every(val => secondRange.includes(val))) {
        result += 1 
    } else if(secondRange.every(val => firstRange.includes(val))) {
        result += 1
    }
})

console.log('Result: ', result) //? 2