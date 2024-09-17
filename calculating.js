const add = (a,b)=> {
    return a + b
}


const subtract =(a,b)=>{
    return a - b
}


const multiply = (a,b)=>{
    return a * b
}

const divide = (a,b)=>{
    return a / b
}
const validNum =(value)=>{
    const datatype = typeof value
    if (datatype === 'number'){
        return true
    } else {
        return false
    }
}
 const  isZero = (value) => {
    const isValidNum =validNum(value)
    
    if (isValidNum) {
        if (value === 0){
            return true
        }
    } else {
        return isValidNum
    }
  }

  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    isZero,
    validNum
  }
  
    