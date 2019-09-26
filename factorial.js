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

    //  var num = prompt("Enter a value");
//  var b, sum = 0;
//  while(num > 0)
//  {
//    b = num % 10;
//    sum = sum * 10 + b;
//    num = parseInt(num / 10);
//  }
//  alert(sum);