//const { default: test } = require('node:test')
const {add, subtract, multiply, divide, isZero, validNum} = require('./utils/calculating')
test('testing for addition',() =>{
    expect(add (2,2)).toBe(4) 
     
})// in the terminal input npx jest