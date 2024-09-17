const {add, subtract, multiply, divide, isZero, validNum} = require('./utils/calculating')
//console.log(add(2,3))
//console.log(subtract(7,3))
//console.log(multiply(2,3))
//console.log(divide(9,3))
const calculate =(a,b,operator)=>{
    const op = operator.toLowerCase()
    const validA= validNum(a)
    const validB= validNum(b)



    if (!validA || !validB){
        return 'Invalid Number'
    }
    switch (op){
        case 'add':
            return add(a,b)
        case 'subtract':
            return subtract (a,b)
        case 'multiply':
            return multiply(a,b)
        case 'divide':
            if (isZero(a) || isZero(b)){
                return 'Cannont divide by zero'
            } else {
                return divide(a,b)
            }
            default:
                return 'Invalid operator'

    }
}

console.log(calculate(2,'3',"add"))
console.log(calculate(2,3,"ADD"))
console.log(calculate(2,3,"addfd"))
console.log(calculate(12,0,"divide"))
console.log(calculate(12,6,"divide"))
console.log(calculate(0,'2',"divide"))