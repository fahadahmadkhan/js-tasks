var num = Number(prompt("Please Enter a Number : "));
var reminder;
var reverse = 0;

while (num > 0) {
  reminder = num % 10;
  reverse = reverse * 10 + reminder;
  num = parseInt(num / 10);
}
alert("Reversed Number : " + reverse)