var arr = [];
    for (var i = 0; i < 5; i++) {
    arr[i] = Number(prompt("Please Enter Number " + (i+1)+ ": "));
}

function maxNumber(arr){
    var max=arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}

function minNumber(arr){
    var min=arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min;
}

function addition(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
       sum= sum + arr[i];
    }
    return sum;
}
    alert("Numbers : " + arr + '\n' 
    + "Max Value : " + maxNumber() + '\n' 
    + "Min Value :" + minNumber() + '\n'
    + "Sum Of Numbers: " + addition() + '\n' 
    + "Average : " + addition()/arr.length);