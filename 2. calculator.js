var num1 = Number(prompt("Please Enter 1st Number :"));
var num2 = Number(prompt("Please Enter 2nd Number :"));
option = prompt("Press 1 for Addition \r\nPress 2 for Substraction \r\nPress 3 for Multiplication \r\nPress 4 for Division");
if (option == 1) {
	alert(num1 + num2)
}
if (option == 2) {
	alert(num1 - num2)
}
if (option == 3) {
	alert(num1 * num2)
}
if (option == 4) {
	alert(num1 / num2)
}

if (option > 4) {
	alert("Invalid Operation")
}
if (option <= 0) {
	alert("Invalid Operation")
}