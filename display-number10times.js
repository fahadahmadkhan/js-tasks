var num = prompt("Please enter a number:");
var result = 'Your Numbers are ' + '\n';
for(var i=0; i<10; i++){
    var result = result +   (i+1) + " : " + num + '\n';
}
alert(result)