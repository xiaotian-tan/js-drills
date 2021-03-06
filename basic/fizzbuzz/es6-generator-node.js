#!/usr/bin/env node

const max = process.argv[2] || 100

const FizzBuzz = (function* () {
  let num = 1
  while (num <= max) {
    let value = num
    num++
    if (value % 15 === 0) {
      value = 'FizzBuzz'
    } else if (value % 3 === 0) {
      value = 'Fizz'
    } else if (value % 5 === 0) {
      value = 'Buzz'
    }
    yield value
  }
})()

for (const n of FizzBuzz) {
  console.log(n)
}
