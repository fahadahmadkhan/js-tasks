var radius = Number(prompt("Please Enter Radius : "));

if (radius > 0) {

    var area = Math.PI * radius * radius;
    var parimeter = 2 * Math.PI * radius;

    alert(

        "Radius = " + radius + '\n' +
        "Area Of Circle = " + (Math.round(area * 100) / 100) + '\n' +
        "Perimeter Of Circle = " + (Math.round(parimeter * 100) / 100)

    );
}

else {

    alert("Good Bye")

}
