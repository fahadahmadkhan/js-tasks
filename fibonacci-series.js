var f1 = 1;
var f2 = 1;
var f3;
var num = Number(prompt("Please enter a number:"));
var result = '';
var i = 1; 
debugger;
while (i<=num) {
    if(i==1) {
        result= f1;
        i++;
        continue;
    }
    if(i==2) {
        result = result + ", " + f2;
        i++;
        continue;
    }
    else {
        f3 = f1+f2;
        f1 = f2;
        f2 = f3;
        result = result + ", " + f3;
    }
    i++;
}
console.log("Your Fibonacci Series is : " + result)
