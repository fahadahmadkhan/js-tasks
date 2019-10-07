var radiusInput = Number(prompt("Please Enter Radius : "));
var radius = radiusInput;

if (radiusInput > 0) {

    var parimeter = 2 * Math.PI * radiusInput;
    radiusInput = radiusInput ** 2;
    var area = Math.PI * radiusInput;

    alert(

        "Radius = " + radius + '\n' +
        "Area Of Circle = " + (Math.round(area * 100) / 100) + '\n' +
        "Perimeter Of Circle = " + (Math.round(parimeter * 100) / 100)

    );
}

else {

    alert("Good Bye")

}
