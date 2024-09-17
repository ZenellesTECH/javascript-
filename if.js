const person = {
    name:'John',
    age:30,
    gender:'M'
}

const person2 ={
    name:'Joy',
    age:12,
    gender:'F'
}
const person3 ={
    name:'Peter',
    age:65,
    gender:'T'
}
const checkGender = (person)=>{
    if (person.gender ==='M') {
        console.log("This is a male")
    } else if (person.gender ==='F'){
        console.log("This is a female")

    } else {
         console.log("Unkown")
    }
}
checkGender(person)
checkGender(person2)
checkGender(person3)


const checkNumber=(num)=> {
    const numType = typeof num
    if (numType==="number"){
        console.log("This is a number")
    } else{
        console.log("This is not a number")
    }
}
checkNumber(5)
checkNumber(25)
checkNumber(5.9)
checkNumber("apple")


const checkTimeOfDay=(time)=>{
    if (time<12){
        console.log("Good Morning")
    } else if (time<18){
        console.log("Good Afternoon")
    }else {
        console.log("Good Evening")
    }
}
checkTimeOfDay(10)
checkTimeOfDay(14)
checkTimeOfDay(20)

//Operators
//&& and operator
//|| Or operator
// ! Not operator
// ==
const checkAge=(person)=>{
    if(person.age>=18 && person.age<=50){
        console.log("This person is an adult")
    }else if (person.age<18){
        console.log("This is a minor")
    }else if (person.age >50){
        console.log("This person is a senior citizen")
    }else {
        console.log("Unknown")
    }
}
//checkAge(person)
//checkAge(person2)
//checkAge(person3)

//if (person.gender === "M" || person.gender==="F"){
   // console.log("this person has set of gender")
//}
//if (person2.gender ==="F" && person2.age <=60){
    //console.log("this is a female senior citizen")
//}
//const isValid=false
//if(!isValid){
    //console.log("This is not valid")
//}

//const value="fdfd"

const checkValid =(isValid)=>{
    if (!isValid){
        return false
    } else {
        return true
    }
}
const values =[3,"",25,"jake",null,undefined,{name:"max"},NaN]
const validValues =[]
for (let i = 0; i < values.length; i++) {
     const result =checkValid(values[i]);
     if (result) {
        console.log("valid")
        validValues.push(values[i])
     }else{
        console.log("not valid")
        values.splice(i,1)
        
     }
}
console.log(values)
console.log(validValues)
