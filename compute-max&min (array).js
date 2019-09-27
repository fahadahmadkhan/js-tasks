var num = 3;
var arr = [];
var i;
var sum =0;
var avg;
debugger;
for(i = 0; i < num; i++) {
    arr[i] = Number(prompt("Enter Numbers : "));
    sum = sum + arr[i];
}
    avg = sum/num;
console.log("Numbers : " + arr + '\n' 
+ "Max Value : " + Math.max(...arr) + '\n' 
+ "Min Value : " + Math.min(...arr) + '\n' 
+ "Sum Of Numbers: " + sum + '\n' 
+ "Average : " + avg)