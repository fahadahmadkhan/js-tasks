var input = [];
var avg;

for (var i = 0; i < 5; i++) {
    input[i] = Number(prompt("Please Enter Number " + (i + 1) + ": "));
}

var max = input[0];
for (var i = 0; i < input.length; i++) {
    if (input[i] > max) {
        max = input[i]
    }
}


var min = input[0];
for (var i = 0; i < input.length; i++) {
    if (input[i] < min) {
        min = input[i]
    }
}


var sum = 0;
for (var i = 0; i < input.length; i++) {
    sum = sum + input[i];
}
alert("Numbers : " + input + '\n' +
    "Max Value : " + max + '\n' +
    "Min Value :" + min + '\n' +
    "Sum Of Numbers: " + sum + '\n' +
    "Average : " + avg);