// -------------------------------- Input Matrices Range   --------------------------------

var matrix1Row = prompt("Enter The Number The Row For First Matrix");
var matrix1Col = prompt("Enter The Number The Columns For First Matrix");

var matrix2Row = prompt("Enter The Number The Row For Second Matrix");
var matrix2Col = prompt("Enter The Number The Columns For Second Matrix");

// -------------------------------- Input Matrices Range  --------------------------------

// -------------------------------- Input Matrices Enteries  --------------------------------

var matrix1 = new Array(matrix1Row);
for (var i = 0; i < matrix1Row; i++) {
    matrix1[i] = new Array(matrix1Col);
}

for (var i = 0; i < matrix1Row; i++) {
    for (var j = 0; j < matrix1Col; j++) {
        matrix1[i][j] = prompt(
            "Enter The Numbers For First Matrix" + '\n' +
            "Row # " + (i + 1) + '\n' +
            "Column # " + (j + 1))
    }
}

var matrix2 = new Array(matrix2Row);
for (var i = 0; i < matrix2Row; i++) {
    matrix2[i] = new Array(matrix2Col);
}

for (var i = 0; i < matrix2Row; i++) {
    for (var j = 0; j < matrix2Col; j++) {
        matrix2[i][j] = prompt(
            "Enter The Numbers For First Matrix" + '\n' +
            "Row # " + (i + 1) + '\n' +
            "Column # " + (j + 1))
    }
}

// -------------------------------- Input Matrices Enteries  --------------------------------

// -------------------------------- Conditions  --------------------------------

if (matrix1Row != matrix2Col) {
    alert("Matrices with entered orders can't be multiplied with each other");
}

if (matrix1Row == matrix1Col) {
    var matricesProduct = multiplyMatrices(matrix1, matrix2);
    console.log(matricesProduct);
}

// -------------------------------- Conditions  --------------------------------

// -------------------------------- Output  --------------------------------

function multiplyMatrices(matrix1, matrix2) {
    var product = [];

    for (var i = 0; i < matrix1.length; i++) {
        product[i] = [];

        for (var j = 0; j < matrix2[0].length; j++) {
            var sum = 0;

            for (var k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            product[i][j] = sum;
        }
    }
    return product;
}

// -------------------------------- Output  --------------------------------