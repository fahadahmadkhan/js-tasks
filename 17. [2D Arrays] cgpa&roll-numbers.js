var studentName = []
var rollNumber = []
var cgpa = []
var studentDetails = ' Student Details' + '\n';
var grade = '';
for (i = 0; i < 3; i++) {
    studentName[i] = prompt("Enter Name of Student #" + (i + 1) + ": ");
    rollNumber[i] = Number(prompt("Enter Roll Number of Student #" + (i + 1) + ": "));
    cgpa[i] = Number(prompt("Enter CGPA of Student #" + (i + 1) + ": "));
};
for (var i = 0; i < studentName.length; i++) {
    studentDetails = studentDetails + '\n' +
        "~ Student # " + (i + 1) + '\n\n' +
        "Name : " + studentName[i] + '\n' +
        "Roll Number # : " + rollNumber[i] + '\n' +
        "CGPA : " + cgpa[i] + '\n';
}

alert(studentDetails)