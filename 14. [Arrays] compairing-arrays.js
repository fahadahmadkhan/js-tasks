var arr1 = [];
var arr2 = [];
for (var i = 0; i < 5; i++) {
    arr1[i] = Number(prompt("First Array - Number #" + (i+1) + ": "));
}

for (var i = 0; i < 5; i++) {
    arr2[i] = Number(prompt("Second Array - Number #" + (i+1) + ": "));
}

for (var i = 0; i < 5; i++) {
    if (arr1[i] !== arr2[i]) {
        break;
    }
}

var inputs = "First Array : " + arr1 + '\n' + "Second Array : " + arr2 + '\n';

if (i === num) {
    var msg = 'Arrays are Equal';
} else {
    var msg = 'Arrays are not Equal';
}

alert(inputs + msg);