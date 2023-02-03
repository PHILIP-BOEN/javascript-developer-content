function* generate(){
/*  let i = 0;

    yield "BMW";
    yield "AUDI";
    yield "HONDA";
    yield "TESLA";
*/
    let carArr = ["AUDI", "BMW", "HONDA", "TESLA"]
    for (let i = 0; i<carArr.length; i++){
        yield carArr[i];
    }
}

let gen = generate();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());