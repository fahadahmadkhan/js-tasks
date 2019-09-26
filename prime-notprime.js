var n = Number(prompt("Please enter a number:"));
var i=2;
	while (i <= n ) {	
		if (n%i == 0){
			break;
		}
		i++;
	}
	if (n/i == 1 ){
		alert(n + ' is a prime number');
	}
	else {
	alert(n + ' is not a prime number');
	}