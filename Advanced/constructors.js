//Object Constuctor Method
// let obj_name = new Object();


{
let plot1 = new Object();
plot1.length = 5;
plot1.width = 10;
plot1.getArea = function(){
    return this.length*this.width;
};
plot1.getPerimeter = function(){
    return 2*(this.length + this.width);
};

document.write(plot1.getArea());
document.write("<br>");
document.write(plot1.getPerimeter());
}



//Constructor Function
{

function plot(length, width){
    this.length = length;
    this.width = width;

    this.getArea = function(){
        return length * width;
    }

    this.getPerimeter = function(){
        return 2 * (length+width);
    }
}

    let plot1 = new plot(10, 20);
    document.write("<br>");
    document.write(plot1.length);
    document.write("<br>");
    document.write(plot1.getArea());
    document.write("<br>");
    document.write(plot1.getPerimeter());

}