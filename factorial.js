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

 // var num = Number(prompt("Please enter a number:"));
// var arr = [];
// var i;
// for(i = 0; i < num; i++) {
//     arr[i] = Number(prompt("Enter Numbers: "));
// }
// for(i = 0; i < num; i++) {
//     console.log(arr[i]);
// }