var num = Number(prompt("Please Enter a Number : "));
var i = 0;
var myString = 'Table For ' + num + ' is :' + '\n';
for(i=1;i<11;i++) {
  myString = myString + num + " x " + i + " = " + num*i + '\n';
}
alert(myString)
