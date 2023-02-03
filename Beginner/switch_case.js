let month = 3;
    switch (month) {
        case 1:
            document.write("January");
            break;
        case 2:
            document.write("February");
            break;
        case 3:
            document.write("<br> March");
            break;
        case 4:
            document.write("April");
            break;
        case 5:
            document.write("May");
            break;

        default:
            document.write("Invalid Input");
            break;
    }

{
    
let x = 6;
switch (x%2) {
    case 0:
        document.write("<br> Even");
        break;
    case 1:
        document.write("Odd");
        break;

    default:
        document.write("Invalid Input");
        break;
}

let y = 40;
switch (true) {
    case y>=40 && y<=49:
        document.write("<br> Grade D");
        break;
    case y>=50 && y<=69:
        document.write("Grade C");
        break;

    default:
        document.write("Invalid Input");
        break;
}
let c = 91;
switch (true) {
    case c%2==0:
        document.write("Even");
        break;
    case c%2==1:
        document.write("<br> Odd");
        break;
    
    default:
        document.write("Invalid Input");
        break;
}

}