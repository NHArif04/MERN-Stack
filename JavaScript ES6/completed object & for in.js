console.log("implementation of object and for..in loop");
var objects={      
    name:{
        first : "Nahid",
        mid : "Hasan",
        last : "Arif"
    },

    contact:{
        phone : "01609975020",
        email : "nahidhasanarif03@gmail.com"
    }
}
for(x in objects){    // variable can be used without declaring
    console.log(x + " : " + JSON.stringify(objects[x]));  // for..in is used to print index number or object's attribute/property
    console.log(`${x} : ${JSON.stringify(objects[x])}`);  //back tik and JSON.stringify to print json formate object
}