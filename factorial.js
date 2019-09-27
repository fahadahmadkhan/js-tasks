var num = Number(prompt("Please enter a number:"));
var i=num, result=num;
debugger;
while(i>=1) {
    if(i==1){
        break;
    }
    i--;
    result = result*i
}
 alert("Factorial : " + result);