var names = ["Nahid","Hasan","Arif"]
console.log("My full name : ")
for(let name of names){
    console.log(name," ") //  for..of to print each of the element in given array/string
}
name = "Nahid" //declaring and initializing a variable without var/let/const keyword
for(let x of name){
    console.log(x); //for..of also can be used for print single character of a string
}
console.log(5**2) //exponential, same as x^y in calculator it also can be written like this - Math.pow(x,y) not math.pow()

console.log("implementation of object and for..in loop");
var names={      
        first : "Nahid",
        mid : "Hasan",
        last : "Arif"
    }
for(x in names){    // variable can be used without declaring
    console.log(x + " : " + names[x]);  // for..in is used to print index number or object's attribute/property
}