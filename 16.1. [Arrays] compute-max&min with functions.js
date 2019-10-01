var input = [];
for (var i = 0; i < 5; i++) {
    input[i] = Number(prompt("Please Enter Number " + (i + 1) + ": "));
}

function maxNumber() {
    var max = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i]
        }
    }
    return max;
}

function minNumber() {
    var min = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i] < min) {
            min = input[i]
        }
    }
    return min;
}

function addition() {
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum = sum + input[i];
    }
    return sum;
}
alert("Numbers : " + input + '\n' +
    "Max Value : " + maxNumber(input) + '\n' +
    "Min Value :" + minNumber(input) + '\n' +
    "Sum Of Numbers: " + addition(input) + '\n' +
    "Average : " + addition(input) / input.length);