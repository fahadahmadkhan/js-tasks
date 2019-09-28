var num = 4;
var arr = [];
var i;
var sum = 0;
var avg;
var val = 0;
for(i = 0; i < num; i++) {
    var n=i+1;
    arr[i] = Number(prompt("Number #" + n + ": "));
}
for(i = 0; i < num; i++){
    if(arr[i]>val){
        val=arr[i]
    }
}
var max=val;
for(i = 0; i < num; i++){
    if(arr[i]<val){
        val=arr[i]
    }
}
var min=val;

for(i = 0; i < num; i++) {
    sum = sum + arr[i];
}
    avg = sum/num;
    alert("Numbers : " + arr + '\n' 
    + "Max Value : " + max + '\n' 
    + "Min Value :" + min + '\n'
    + "Sum Of Numbers: " + sum + '\n' 
    + "Average : " + avg);


// for(i = 0; i < num; i++) {
//     sum = sum + arr[i];
// }
//     avg = sum/num;
//     alert("Numbers : " + arr + '\n' 
//     + "Max Value : " + Math.max(...arr) + '\n' 
//     + "Min Value : " + Math.min(...arr) + '\n' 
//     + "Sum Of Numbers: " + sum + '\n' 
//     + "Average : " + avg);

// for(i = 0; i < num; i++) {
//     arr[i] = Number(prompt("Enter Numbers : "));
//     sum = sum + arr[i];
// }
//     avg = sum/num;
// alert("Numbers : " + arr + '\n' 
// + "Max Value : " + Math.max(...arr) + '\n' 
// + "Min Value : " + Math.min(...arr) + '\n' 
// + "Sum Of Numbers: " + sum + '\n' 
// + "Average : " + avg);