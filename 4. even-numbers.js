var num = Number(prompt("Please Enter a Number : "));
var i = 0;
var result = 'Even Numbers are :' + '\n';
while (i < num) {
    result = result + (i * 2) + ', ';
    i++;
}
alert(result)