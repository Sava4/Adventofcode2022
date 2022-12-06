const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb` //7
const input2 = `bvwbjplbgvbhsrlpgdmjqwftvncz` // 5
const input3 = `nppdvjthqldpwncqszvftbrmjlhg` // 6
const input4 = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg` // 10
const input5 = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw` // 11

const parseInput = input.split('')

let result
const msgSize = 4

for (let i = 0; i < parseInput.length - msgSize + 1; i++) {
    const signalSet = new Set(parseInput.slice(i, i + msgSize))
    if(signalSet.size === msgSize) {
        result = i + msgSize
        break;
    }
}

console.log('Result: ', result)