const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

const rucksaks = input.split('\n').map(ruck => [ruck.slice(0,ruck.length/2).split(''), ruck.slice(ruck.length/2).split('')]) //?

const commonItems = rucksaks.map(ruck => ruck[0].find(item => ruck[1].includes(item))) //?

const valueArr = ['_', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const itemValues = commonItems.map(item => valueArr.indexOf(item))

const result = itemValues.reduce((pre,cur) => pre + cur) //? 157
console.log(result)