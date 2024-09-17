//array ia a type of global object that is used to store data.
//array is an object that represents a collection of similar types of element.
 //const color = ["red","blue","green","yellow"]
 //console.log(color)
 //const color2= new Array("red","blue","green","yellow",99,100,{name:"max"},true)
 //console.log(color2)
 //console.log(color[4])
 //color[0]="black"
 //console.log(color[0])
 //console.log(color[3]) // to find the object with this index number
 //console.log(color.length) // to get how long an array is
 //const fruit = ["grape","blue-berries","green-apple","yellow-pepper"]
 //console.log(fruit.sort())// to arrange array alphabetically.
 //console.log(fruit.toString())

 //const nums1=[10]
 //console.log(typeof nums1)
 //const nums2= new Array(10)
 //console.log(nums2)

 //const color1= color.at(0)
 //console.log(color1)
 //console.log(color.join("|"))
 //console.log(color.join(" "))
 
 //const popedcolor =color.pop() //to remove a value from an array at the back
 //console.log(popedcolor)
 //console.log(color)

 //color.push("brown") //to add a value to an array from the back
 //console.log(color)

 //color.shift() // to remove a value from the array at the front
 //const shiftedcolor=color.shift()
 //console.log(shiftedcolor)
 //console.log(color)
 //color.unshift("purple")// to add a value to an array at the left side
 //console.log(color)

 //color.splice(2, 1, "pink", "magenta")
 //console.log(color)

 const asiaCars = ["Toyota","Honda","Suzuki"]
 const europeanCar = ["BMW","Audi","Mercedes"]
 const americanCar = ["Ford","Chevrolet","Dodge"]
 //const allCar1 = asiaCars.concat(europeanCar)
 const allCar = asiaCars.concat(europeanCar, americanCar)
 
 allCar.forEach((carBrand, index) => {
    //console.log(`${index}:${carBrand}`)
    //console.log("This is a" + carBrand + "car")
 })
 //console.log(allCar1)
 //console.log(allCar2)

 
//const number1 =[1,2,3,4,5]
//const number2 =[100,200,300,400,500]
//const result =number1.map((num)=>num*num)
//const result2 =number2.map((price)=> price - 50)
//const result3 =allCar.map((car)=>car+ "car")
//console.log(result)
//console.log(result2)
//console.log(result3)
const res =[]
const number3 =[1,2,3,4,5,6,7,8,9,10]
const result4 =number3.filter((carBrand)=>{
   if (carBrand % 2===0){
      res.push(carBrand)
   }
})
console.log(res)


const number4 =[1,7,89,100,4]
const result5 =number4.find((num)=> num > 5)
//console.log(result5)

const number5 =[1,2,3,4,5]
const result6 =number5.reduce((total,num)=>total + num ,0)
//console.log(result6)

for(const car of allCar){
   console.log(car)
}