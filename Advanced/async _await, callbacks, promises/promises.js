function bookingCar(Car){
    return new Promise ((resolve, reject) =>{
        console.log("Searching for available cars...")
        if(Car == "Mazda"){
            resolve("Set the pickup date and place for your booking.")
        }
        else{
            reject("Sorry! The car you want is unavailable for now. Choose another car.")
        }
    })
}

function processBooking(booking){
    return new Promise((resolve, reject) => {
        console.log("Processing your booking!");
        resolve (booking);
    })
}

bookingCar("Mazda").then(function(booking){
    console.log("The selected car is available, you can proceed to hire!")
    return processBooking(booking);
})
.then(function(processedBooking){
    console.log(processedBooking);
}).catch(error =>{
    console.log(error);
})


{
    //Simpler Explanation of Promises

    let properties = {
        product: [
            "Oramio Earphones",
            "Nike Shoes",
            "Wooden Table Set",
            "Women's Gucci Bag"
        ],
        location: ["Kenyatta Ave", "Likoni Road", "Capital Center"],
        date: ["Today", "Tomorrow", "Specified date"],
        checkout: ["Pay by Cash or Mpesa", "Pay through MasterCard"],
        terms: ["Accepted", "Declined"]
    };

    let is_product_available = true;

    let order = (time, work) => {
        return new Promise((resolve, reject) => {
            if (is_product_available) {
                setTimeout(() => {
                    resolve(work());
                }, time);
            } else {
                reject(
                    console.log(
                        "Sorry! We are out of stock in relation of the selected product."
                    )
                );
            }
        });
    };

    order(2000, () =>
        console.log(
            `There's a customer who has made an order. The order placed is ${properties.product[2]}.`
        )
    )
        .then(() => {
            return order(2000, () =>
                console.log(
                    `The customer has selected ${properties.location[0]} as the pickup location and ${properties.date[0]} as the pickup date.`
                )
            );
        })

        .then(() => {
            return order(2000, () =>
                console.log(
                    `The customer prefers ${properties.checkout[1]} as method of payment`
                )
            );
        })

        .then(() => {
            return order(1500, () =>
                console.log(`The customer has ${properties.terms[0]} the shipment terms.`)
            );
        })

        .catch(() => {
            console.log(
                "However, here are some of the options similar to the product you have selected..."
            );
        })
        .finally(() => {
            console.log(
                "Thank You for interacting with us! We will be glad if you could rate our services and provide feedback where possible."
            );
        });

}