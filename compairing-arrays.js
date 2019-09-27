var num = 5;
var arr1 = [];
var arr2 = [];
var i;
for(i = 0; i < num; i++) {
    var n=i+1;
    arr1[i] = Number(prompt("First Array - Number #" + n + ": "));
}
for(i = 0; i < num; i++) {
    var n=i+1;
    arr2[i] = Number(prompt("Second Array - Number #" + n + ": "));
}
for(i = 0; i < num; i++) {
    if(arr1[i] == arr2[i] ){
        alert("First Array : " + arr1 + '\n' + "Second Array : " + arr2 + '\n' + "Arrays are Equal");
        break;
    }
    else{
        alert("First Array : " + arr1 + '\n' + "Second Array : " + arr2 + '\n' + "Arrays are not Equal");
        break;
    }
}