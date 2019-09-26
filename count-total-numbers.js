var num = Number(prompt("Please enter a number:"));
var count = 0;
while(num >= 1) {
    num = num/10;
    count++;
}
alert("Total Digits are : " + count)