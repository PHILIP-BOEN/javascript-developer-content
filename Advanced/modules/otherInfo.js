let sumArray = (max) => {
    let num = [10, 20, 30, 40];
    let x = 0;
    for (let i of num) {
        x += i;
    }

    console.log(x);
    max();
};

let large = () => {
    let num = [10, 20, 30, 40];
    let x = num[0];
    for (let i of num) {
        if (x < i) {
            x = i;
        }
    }
    console.log(x);
};

function generateID(){
    const time = Date.now();
    const randomNo = Math.floor(Math.random() * 10000);

    const uniqueId = time + "_"+ randomNo;
    return uniqueId;
}
export let age = 23;

let fullname = "John Doe";
let hobby = "Chess";

//export let x = sumArray;

export {fullname, hobby,  generateID, };
export { sumArray as sum, large };