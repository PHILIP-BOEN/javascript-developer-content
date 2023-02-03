function Numbers(even){
    even();
}
function even(){
    console.log("Even Numbers");
}

console.log(Numbers(even));

{
    //setTimeout Function - How Async-Await Works

    console.log("Register an Account with us!");
    console.log("Login with your Account");

    setTimeout(() => {
        console.log("Create");
        console.log("Edit");
        console.log("Delete");
        console.log("Update");
    }, 2500);


    setTimeout(function () {
        func1();
    }, 3000);

    function func1() {
        console.log("Accept or Reject Cookies for this website");
    }
}

{
    //CallBacks

    function one(call_two) {
        console.log("Step One");
        call_two();
    }

    function three() {
        console.log("Step Three");
    }

    function two() {
        console.log("Step Two");
    }

    one(two);
    three();

    let stocks = {
        Fruits: ["Apple", "Orange", "Mango"],
        fruit_price: 1500,
        fruit_type: "Organic"
    };

    console.log(stocks.Fruits[2]);

    let order = (call_production) => {
        console.log("Order has been placed... Processing to begin in a few!");
        call_production();
    };

    let production = () => {
        setTimeout(() => {
            console.log("We are processing your order now, please be patient!");
        }, 3000);
    };

    order(production);

}

{
    //Advanced CallBacks

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

    let order = (
        selected_product,
        selected_location,
        selected_date,
        selected_checkout,
        selected_terms,
        terms_accepted,
        call_processing,
        call_delivery
    ) => {
        setTimeout(() => {
            console.log(
                `There's a customer who has made an order. The order placed is ${properties.product[selected_product]}.`
            );
            setTimeout(() => {
                console.log(
                    `The customer has selected ${properties.location[selected_location]} as the pickup location and ${properties.date[selected_date]} as the pickup date.`
                );
                setTimeout(() => {
                    console.log(
                        `The customer prefers ${properties.checkout[selected_checkout]} as method of payment`
                    );

                    setTimeout(() => {
                        if (terms_accepted) {
                            console.log(
                                `The customer has ${properties.terms[selected_terms]} the shipment terms.`
                            );
                            call_processing();
                            setTimeout(() => {
                                call_delivery();
                            }, 2000);
                        } else {
                            console.log(
                                `The customer has ${properties.terms[selected_terms]} the shipment terms.`
                            );
                            console.log(
                                "Sorry! You cannot continue with this order since you have declined their terms of shipment. Choose another product that suits your shipment terms and conditions."
                            );
                        }
                    }, 1500);
                }, 2000);
            }, 2000);
        }, 0000);
    };

    let processing = () => {
        console.log("Processing your order, please wait...");
        setTimeout(() => {
            console.log(
                "Your order is ready for shipment. You'll receive your shipment in the pickup details you have specified."
            );
        }, 2000);
    };

    let delivery = (
        cancellation = true,
        acceptance = true,
        payment_confirmation = true
    ) => {
        if (cancellation) {
            console.log(
                "The customer has not cancelled the order, proceed to deliver the package."
            );
            if (acceptance) {
                console.log(
                    "The customer checks the package and confirms if that is what was ordered."
                );
                if (payment_confirmation) {
                    console.log(
                        "The customer has fully paid as per the payment method and should be given the package"
                    );
                } else {
                    console.log(
                        "Unfortunately, the customer was unable to pay for the package thus the order will be cancelled by default and package returned to store"
                    );
                }
            } else {
                console.log(
                    "The customer is not satisfied with the order, and demands a refund as the package is returned back to the store"
                );
            }
        } else {
            console.log(
                "The customer has cancelled the order, therefore do not deliver the package."
            );
        }
        console.log(
            "Ask for feedback on how our services are and rate us if they feel like doing so."
        );
    };

    order(1, 0, 1, 0, 0, true, processing, delivery);

}