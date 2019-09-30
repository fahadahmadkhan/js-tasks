var num = Number(prompt("Please Enter a Number : "));
var i=num, result=num;
debugger;
while(i>=1) {
    if(i==1){
        break;
    }
    i--;
    result = result*i
}
 alert("Factorial of " + num + " is : " + result);