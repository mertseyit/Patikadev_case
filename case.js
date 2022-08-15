var array = [];
var first;
let second;
let loop = 1;
var total = 0;
var temp

function oddishOrEvenish(number) {
    temp = number
    //sayıyı basamaklara ayırma
    while(loop == 1) {
        first = number % 10;
        array.push(first)
        second = (number - (first)) / 10
        number = second;
        if(number < 1) {
            loop = 0
        }
    } 
    number = temp;
    //basamak değerlerinin toplanması
    array.forEach(element => {
        total+=element
    });
    console.log(total)
    if(total % 2 == 0) {
        console.log("odd")
    } else {
        console.log("Even")
    }
}
oddishOrEvenish("1235")





