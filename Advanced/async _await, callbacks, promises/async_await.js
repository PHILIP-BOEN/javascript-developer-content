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

let time = (ms) => {
  return new Promise((resolve, reject) => {
    if (is_product_available) {
      setTimeout(resolve, ms);
    } else {
      reject(
        console.log(
          "Sorry! We are out of stock in relation of the selected product."
        )
      );
    }
  });
};

async function order() {
  try {
    await time(2000);
    console.log(
      `There's a customer who has made an order. The order placed is ${properties.product[2]}.`
    );

    await time(1000);
    console.log(
      `The customer has selected ${properties.location[0]} as the pickup location and ${properties.date[0]} as the pickup date.`
    );

    await time(2000);
    console.log(
      `The customer prefers ${properties.checkout[1]} as method of payment`
    );

    await time(1500);
    console.log(`The customer has ${properties.terms[0]} the shipment terms.`);
  } catch (error) {
    console.log(
      "However, here are some of the options similar to the product you have selected...",
      error
    );
  } finally {
    console.log(
      "Thank You for interacting with us! We will be glad if you could rate our services and provide feedback where possible."
    );
  }
}

order();

/*
---Promise and Async/Await---

let after_sales_services = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        console.log("Accept or Decline Oil Checkup and Windscreen Cleaning")
      );
    }, 3000);
  });
};

async function fuel_process() {
  console.log("The driver enters the gas station");
  console.log("Maintains queue to get fuel");
  console.log("Indicates type of fuel and amount to be fuelled for the car");
  await after_sales_services();
  console.log("Checks tire pressure");
  console.log("Parks to buy groceries or goes straight home");
}

fuel_process();
console.log("confirm's fuel price");
console.log("Pay's for fuel");

*/

/*

----Syntax Testing-----

async function order(){
  try{
    await production;
  }
  catch(error){
    console.log("The production method does not exist", error)
  }
  finally{
    console.log("Prints either way!")
  }
}

order()
.then(()=>{
  console.log("Proceed to step 2")
})
.then(()=>{
  console.log("Proceed to step 3")
})
*/




/* let order = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    if (isReady) {
      resolve('Shop is Open');
    } else {
      reject('Shop is Closed')
    }
    //isReady ? resolve('Shop is Open'): reject('Shop is Closed');
  }, 2000);
});

async function shop() {
  try {
    let success = await order;
    console.log(success);
  } catch (error) {
    console.log(error);
  }
}

shop();
order.then(success => console.log(success))
.catch(error => console.log(error))
 */
