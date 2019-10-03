var studentName = []
var rollNumber = []
var cgpa = []
var studentDetails = ' Student Details' + '\n';
var grade = '';
for (i = 0; i < 3; i++) {
    studentName[i] = prompt("Enter Name of Student #" + (i + 1) + ": ");
    rollNumber[i] = Number(prompt("Enter Roll Number of Student #" + (i + 1) + ": "));
    cgpa[i] = Number(prompt("Enter CGPA of Student #" + (i + 1) + ": "));

    if (cgpa[i] <= 4) {
        grade = "A+";
    }

    if (cgpa[i] <= 3.7) {
        grade = "A-";
    }

    if (cgpa[i] <= 3.3) {
        grade = "B+";
    }

    if (cgpa[i] <= 3.0) {
        grade = "B-";
    }

    if (cgpa[i] <= 2.7) {
        grade = "C+";
    }

    if (cgpa[i] <= 2.3) {
        grade = "C-";
    }

    if (cgpa[i] <= 2.0) {
        grade = "D+";
    }

    if (cgpa[i] == 1.0) {
        grade = "D-";
    }

    if (cgpa[i] < 1.0) {
        grade = "F (Fail)";
    }
};
for (var i = 0; i < studentName.length; i++) {
    studentDetails = studentDetails + '\n' +
        "~ Student # " + (i + 1) + ' ~' + '\n\n' +
        "Name : " + studentName[i] + '\n' +
        "Roll Number # : " + rollNumber[i] + '\n' +
        "CGPA : " + cgpa[i] + '\n' +
        "Grade : " + grade[i] + '\n';
}

alert(studentDetails)