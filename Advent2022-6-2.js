const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb` //19
const input2 = `bvwbjplbgvbhsrlpgdmjqwftvncz` // 23
const input3 = `nppdvjthqldpwncqszvftbrmjlhg` // 23
const input4 = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg` // 29
const input5 = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw` // 26

const parseInput = input.split('')

const msgSize = 14
let result

for (let i = 0; i < parseInput.length - msgSize + 1; i++) {
    const signalSet = new Set(parseInput.slice(i, i + msgSize))
    if(signalSet.size === msgSize) {
        result = i + msgSize
        break;
    }
}

console.log('Result: ', result)