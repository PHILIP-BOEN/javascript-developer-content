
let prom = new Promise(function(resolve, reject){
    let drive = true;
    if(drive){
        resolve("Yes,");
    }
    else{
        reject("No,");
    }
});

prom.then(function(resolve){
    console.log(resolve +" "+ "The user knows how to drive.");
}).catch(function(reject){
    console.log(reject +" "+ "The user doesn't know how to drive");
})



/*
let functions = function(){
    return new Promise(function(resolve, reject){
        resolve("The user has learnt about functions");
    });
}

let callback = function(message){
    return new Promise(function(resolve, reject){
        resolve(message+ " " +"The user has learnt about callback");
    });
}

let promises = function(message){
    return new Promise(function(resolve, reject){
        resolve(message+ " " +"The user has learnt about promises");
    });
}

functions().then(function(result){
        return callback(result);
}).then(function(result){
        return promises(result);
}).then(function(result){
        console.log("good to go: " +result)
})
*/

function bookingCar(Car) {
    return new Promise((resolve, reject) => {
        console.log("Searching for available cars...")
        if (Car == "Mazda") {
            resolve("Set the pickup date and place for your booking.")
        }
        else {
            reject("Sorry! The car you want is unavailable for now. Choose another car.")
        }
    })
}

function processBooking(booking) {
    return new Promise((resolve, reject) => {
        console.log("Processing your booking!");
        resolve(booking);
    })
}

bookingCar("Mazda").then(function (booking) {
    console.log("The selected car is available, you can proceed to hire!")
    return processBooking(booking);
})
    .then(function (processedBooking) {
        console.log(processedBooking);
    }).catch(error => {
        console.log(error);
    })

