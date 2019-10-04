var matrix1 = [[1, 2], [3, 4]]
var matrix2 = [[5, 6], [7, 8]]
var product = [];

function multiplyMatrices() {
    for (var i = 0; i < 2; i++) {
        product[i] = [];
        for (var j = 0; j < 2; j++) {
            var sum = 0;
            for (var k = 0; k < 2; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            product[i][j] = sum;
        }
    }
    return product;
}
var matricesProduct = multiplyMatrices();

alert(matricesProduct);