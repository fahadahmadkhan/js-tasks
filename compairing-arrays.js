var num = 2;
var arr1 = [];
var arr2 = [];
var i;
debugger;
for(i = 0; i < num; i++) {
    var n=i+1;
    arr1[i] = Number(prompt("First Array - Number #" + n + ": "));
}
for(i = 0; i < num; i++) {
    var n=i+1;
    arr2[i] = Number(prompt("Second Array - Number #" + n + ": "));
}
for(i = 0; i < num; i++) {
    if(arr1[i] === arr2[i] ){
        var equal = "First Array : " + arr1 + '\n' + "Second Array : " + arr2 + '\n' + "Arrays are Equal";
       alert(equal);
    }
    else{
        var notEqual = "First Array : " + arr1 + '\n' + "Second Array : " + arr2 + '\n' + "Arrays are not Equal";
        alert(notEqual);
    }
    break;
}



// for(i = 0; i < num; i++) {
//     equal = "First Array : " + arr1 + '\n' + "Second Array : " + arr2 + '\n' + "Arrays are Equal";
//     notEqual = "First Array : " + arr1 + '\n' + "Second Array : " + arr2 + '\n' + "Arrays are not Equal";
//     if(arr1[i] == arr2[i] ){
//        alert(equal);
//     }
//     else{
//         alert(notEqual);
//     }
// }

// for(i = 0; i < num; i++) {
//     if(arr1[i] == arr2[i] ){
//         alert("First Array : " + arr1 + '\n' + "Second Array : " + arr2 + '\n' + "Arrays are Equal");
//     }
//     else if (){
//         alert("First Array : " + arr1 + '\n' + "Second Array : " + arr2 + '\n' + "Arrays are not Equal");
//     }
// }