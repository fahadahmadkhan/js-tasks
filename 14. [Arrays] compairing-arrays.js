var num = 5;
var arr1 = [];
var arr2 = [];
var msg;
var i;
for (i = 0; i < num; i++) {
    var n = i + 1;
    arr1[i] = Number(prompt("First Array - Number #" + n + ": "));
}

for (i = 0; i < num; i++) {
    var n = i + 1;
    arr2[i] = Number(prompt("Second Array - Number #" + n + ": "));
}

for (i = 0; i < num; i++) {
    if (arr1[i] !== arr2[i]) {
        break;
    }
}

var inputs = "First Array : " + arr1 + '\n' + "Second Array : " + arr2 + '\n';

if (i === num) {
    msg = 'Arrays are Equal';
} else {
    msg = 'Arrays are not Equal';
}

alert(inputs + msg);