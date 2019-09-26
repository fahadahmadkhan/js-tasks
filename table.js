var num = Number(prompt("Please enter a number:"));
var i = 0;
var myString = '';
for(i=1;i<11;i++) {
  myString = myString + num + " x " + i + " = " + num*i + '\n';
}
alert(myString)
