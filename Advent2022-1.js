const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

const numbers = input.split('\n\n').map(elf => elf.split('\n').map(n => Number(n))) //?

const sumCalories = numbers.map(elf => elf.reduce((prev, cur) => prev + cur))

const findMax = Math.max(...sumCalories) //? 24000

const topThree = sumCalories.sort((a,b) => b-a).slice(0,3).reduce((prev,cur) => prev + cur) //? 45000