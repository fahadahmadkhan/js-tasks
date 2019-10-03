
//Max/Min
// for (i = 0; i < num; i++) {
//     sum = sum + arr[i];
// }
// avg = sum / num;
// alert("Numbers : " + arr + '\n'
//     + "Max Value : " + Math.max(...arr) + '\n'
//     + "Min Value : " + Math.min(...arr) + '\n'
//     + "Sum Of Numbers: " + sum + '\n'
//     + "Average : " + avg);

// for (i = 0; i < num; i++) {
//     arr[i] = Number(prompt("Enter Numbers : "));
//     sum = sum + arr[i];
// }
// avg = sum / num;
// alert("Numbers : " + arr + '\n'
//     + "Max Value : " + Math.max(...arr) + '\n'
//     + "Min Value : " + Math.min(...arr) + '\n'
//     + "Sum Of Numbers: " + sum + '\n'
//     + "Average : " + avg);

// function maxNumber() {
//     for (i = 0; i < num; i++) {
//         if (arr[i] > val) {
//             val = arr[i]
//         }
//     }
//     return val;
// }
// var max = val;

// for(i = 0; i < num; i++){
//     if(arr[i]<val){
//         val=arr[i]
//     }
// }
// var min=val;

// function addition() {
//     for (i = 0; i < num; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// avg = sum / num;
// alert("Numbers : " + arr + '\n'
//     + "Max Value : " + maxNumber() + '\n'
//     + "Min Value :" + min + '\n'
//     + "Sum Of Numbers: " + addition() + '\n'
//     + "Average : " + avg);

//Max/Min


-----------------------------------------------------------------------------------------------------------------------

    //Comaparing Arrays
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

    //Comaparing Arrays

    -----------------------------------------------------------------------------------------------------------------------

 //Matrix Mutipliucation



//         function mulitply(matrix1, matrix2) {
//             var result = new Array(matrix1.lenght)
//             for (var i = o; i < result.length; i++) {
//                 result[i] = new Array(matrix2[i].lenght);
//                 for (var j = 0; j < matrix1.length; j++) {
//                     result[i][j] = 0;
//                     for (var k = 0; k < matrix2; k++) {
//                         result[i][j] = result + matrix1[i][k] * matrix2[k][j];
//                     }
//                 }
//                 return result;
//             }
//         }
// var matrix1 = [[8, 3], [2, 4], [3, 6]],
//     matrix2 = [[1, 2, 3], [4, 6, 8]];
// document.write('matrix a:<br />');
// display(matrix1);
// document.write('matrix b:<br />');
// display(matrix2);
// document.write('a * b =<br />');
// display(multiply(matrix1, matrix2));


------------------------------
// var matrix1 = [[8, 3], [2, 4], [3, 6]],
//     matrix2 = [[1, 2, 3], [4, 6, 8]];

// function multiply(matrix1, matrix2) {
//     var result = new Array(matrix1.lenght)
//     for (var i = o; i < result.length; i++) {
//         result[i] = new Array(matrix2[i].lenght);
//         for (var j = 0; j < matrix1.length; j++) {
//             result[i][j] = 0;
//             for (var k = 0; k < matrix2; k++) {
//                 result[i][j] = result + matrix1[i][k] * matrix2[k][j];
//             }
//         }
//     }
//     return result;
// }
// alert(result)


----------
// function multiplyMatrices(m1, m2) {
//     var result = [];
//     for (var i = 0; i < m1.length; i++) {
//         result[i] = [];
//         for (var j = 0; j < m2[0].length; j++) {
//             var sum = 0;
//             for (var k = 0; k < m1[0].length; k++) {
//                 sum += m1[i][k] * m2[k][j];
//             }
//             result[i][j] = sum;
//         }
//     }
//     return result;
// }

// var m1 = [[1,2],[3,4]]
// var m2 = [[5,6],[7,8]]

// var mResult = multiplyMatrices(m1, m2)

// /*In Google Chrome and Firefox you can do:*/

// console.log(mResult)

//Matrix Mutipliucation


---------------------------------------------------------------------------------------------------------------------

//cgpa&roll#

// var studentName = [Fahad, Hamza, Rehan, Bilal, Mehmood]
// var rollNumber = [1, 2, 3, 4, 5];
// var cgpa = [2.9, 3.1, 3.6, 1.7, 2.2];
// var studentDetail = []
// var num =5;
// for (var i = 0; i < num; i++) {
//     alert(rollNumber);
// alert(cgpa);
// }

// var myArray = ['', '', ''];

// for (var i = 0; i < 3; i++) {
//     myArray[i] = new Array(3);
//     for (var j = 0; j < 3; j++) {
//         myArray[i][j] = '';
//     }
// }

---------------------

// for(var i = 0; i < studentDetail.length; i++) {
//     document.write("<h2>"+studentDetail[i][0]+"</h2>");
//     for(var j = 0; j < studentDetail[i].length; j++) {
//         document.write(studentDetail[i][j]+"<br>");
//     }
// }
// var studentName = ["Fahad", "Hamza", "Rehan"];
// var rollNumber = ["Roll Number # 123", "Roll Number # 456", "Roll Number # 789"];
// var cgpa = [3.2, 2.9, 3.6]

// var studentDetail = [
//     ["Fahad", "Roll Number # 123", "CGPA = 3.2"],
//     ["Hamza", "Roll Number # 456", "CGPA = 2.9"],
//     ["Rehan", "Roll Number # 789", "CGPA = 3.6"],
// ];


// for (var i = 0; i < studentDetail.length; i++) {
//     for (var j = 1; j < studentDetail.length; j++) {
//         document.write(studentDetail[i][0] + '<br>')
//         document.write(studentDetail[i][j] + '<br>')
//     }
// }

------------------
// if (cgpa == 4) {
//     grade = "A+";
// }
// if (cgpa <= 3.7) {
//     grade = "A-";
// }
// if (cgpa <= 3.3) {
//     grade = "B+";
// }
// if (cgpa <= 3.0) {
//     grade = "B-";
// }
// if (cgpa <= 2.7) {
//     grade = "C+";
// }
// if (cgpa <= 2.3) {
//     grade = "C";
// }
// if (cgpa <= 2.0) {
//     grade = "C-";
// }
// if (cgpa <= 1.0) {
//     grade = "D";
// }
// if (cgpa < 1.0) {
//     grade = "Fail";
// }


//cgpa&roll#

----------------------------------------------------------------------------------------------------------------------