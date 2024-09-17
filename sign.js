// Basic syntax
function demoFunc(){
    console.log("Hi, there")
}
// Arrow function
    const demoFunc2= () => {
        console.log("Hi, there boo")

    }
    const demoFunc3 = (a,b) => {
        const c = a + b + 2
        return c
    }
    const demoFunc4 = (e,d,x) => {
        const f = (e+ d) * 2
        const z = (f/2) + x
        //const s = q +h
        //console.log("h - before : ",h)
        //h = z - s
        //console.log("h - after : ",h)
        return f
    }
    
    const j = demoFunc2()
    const k = demoFunc3(4,5)
    const l = demoFunc4(3,7,2)
    const q = 1
    let h = 4
    

   // console.log("Addition",demoFunc3(4,5))
    //console.log("Addition",demoFunc3(4,6))
    //console.log("Multipication",demoFunc4(3,7))
    //console.log("Multipication",demoFunc4(4,8))
    console.log("Division",demoFunc4(3,7))
    //console.log("Division",demoFunc4(4,8))
   //console.log(k)
    //console.log("Addition", 4+5)
    //console.log("Addition", 40+ 5)
   //console.log(j) // undefined ps : there was no return.
   
   // leter casing
    // camel casing =demoFunc
   // snake casing = demo_func