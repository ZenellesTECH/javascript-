//console.log("One")
//setTimeout(()=> {
    //console.log("Two")
//},2000)//two seconds delay
//console.log("Three")

//const { reject } = require("async")




//console.log("Six")
//const delay =Date.now() + 2000 //2 seconds delay
//const delayfunc =() =>{//
    //console.log("Four")
//}
//while (Date.now() < delay ) {
    // loop untill the delay is over
    
//}
//delayfunc()
//console.log("Five")


const orderFood = (food) => {
    console.log("Ordering food...")
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            if (food === "pizza") {
                resolve("Food is ready")
            }else{
                reject("Food is not ready")
            }
        },2000)
    })
}
orderFood("rice and stew")
.then((result)=>{
    console.log(result)
}).catch((error) => {
    console.log(error)
})
console.log("Order placed ")