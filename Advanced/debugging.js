function add(){
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);

    let sum = number1 + number2;

    alert(`Sum = ${sum}`);

    //console.log(`Sum = ${parseInt(number1)} + ${parseInt(number2)}`);
}