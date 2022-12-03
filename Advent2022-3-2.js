import chunk from 'lodash/chunk' 


const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

const rucksaks = input.split('\n').map(ruck => ruck.split(''))
const groupsOfThree = chunk(rucksaks, 3)

const groupBadge = groupsOfThree.map(group => group[0].find(ch => group[1].includes(ch) && group[2].includes(ch)))

const valueArr = ['_', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y', 'Z']

const itemValues = groupBadge.map(item => valueArr.indexOf(item))

const result = itemValues.reduce((pre,cur) => pre + cur) //? 70
console.log(result)