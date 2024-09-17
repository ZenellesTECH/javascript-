//create a phone object
const phone = {
    brand: 'Samsung',
    name:'Galaxy S24 Ultra',
    color : 'Black',
    camera:'200MP',
    screensize : 6.8,   // in inches 
    description :() => { //with arrow fuction
        return `This is a ${phone.color}${phone.brand} phone with a ${phone.camera}camera and a ${phone.screensize}screen`
    }
    //without arrow function.
    description1 : function() {
        return `This is a ${this.color}${this.brand} phone with a ${this.camera}camera and a ${this.screensize}screen`
        
    }  
}

const phoneq = new Object()
//phoneq.brand = 'Tecno',
//phoneq.name ='Camon 12 Air',
//phoneq.color ='Blue',
    
  
//const alphabates= "abcdefghijklmnopqrstuvwxyz"
//const vowels="AEIOU"

//const name1= "Joe     Doe"
//const name2 ="Jane Marie"
//console.log(name1.concat("+",name2))
//console.log(`${name1} + ${name2}`)
//console.log(name1.trim()) 
//console.log(name1.replace("    ",""))
//console.log(alphabates.length)
//console.log(alphabates.charAt(15))
//console.log(alphabates.charAt(7))
//console.log(alphabates.slice(8))
//console.log(alphabates.slice(8,12))
//console.log(alphabates.indexOf('k'))
//console.log(alphabates.slice(alphabates.indexOf('k')))
//console.log(alphabates.toLowerCase())
//console.log(alphabates.toUpperCase())
//console.log(vowels.toLowerCase())

//console.log("phone:",phone)
//console.log("phoneq:",phoneq)
//clear
//console.log("phoneq:",phoneq["camera"])
//console.log("phone:", phone.description())



