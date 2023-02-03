function makeOrder(Coffee){
    return new Promise((resolve,reject)=> {
        console.log("Making request for" +" "+ Coffee);
        if(Coffee == "Black Coffee"){
            resolve("Here is your coffee, have a nice day!")
        }
        else{
            reject("Sorry! We serve black coffee only!")
        }
    })
}

function processOrder(order){
    return new Promise((resolve, reject)=> {
        console.log("Processing your order...");
        resolve("Additional Information: " +order)
    })
}

makeOrder("Black Coffee").then(order => {
    console.log("Order has been received!");
    return processOrder(order);
}).then(processedOrder => {
    console.log(processedOrder);
}).catch(error => {
    console.log(error);
})