//Student Markshhet Design Using Js 

var Name = prompt("Enter Your Name");
var Age = prompt("Enter Your Age");
var Roll = prompt("Enter Your Roll No");
var Clas = prompt("Enter Your Clas");
var Math = prompt("Enter Your Math Marks");
var English = prompt("Enter Your English Marks");
var Computer = prompt("Enter Computer Your Marks");
var Urdu = prompt("Enter Your Urdu Marks");
var Islamiyat = prompt("Enter Your Islamiyat Marks");
var obtained_marks = parseInt(Math) + parseInt(English) + parseInt(Computer) + parseInt(Urdu) + parseInt(Islamiyat);
var percentage = obtained_marks * 100 / 500;

document.write("Your Name is " + Name + "<br>");
document.write("Your Age is " + Age + "<br>");
document.write("Your Roll No  is " + Roll + "<br>");
document.write("Your Class is " + Clas + "<br>");
document.write("Your Obtained Mark is " + obtained_marks + "<br>");
document.write("Your Percentage Mark is " + percentage + "<br>");


if (percentage >= 80) {
    document.write("Remarks Excellent: A+")
}
    else if (percentage >= 70) {
    document.write( " Remarks Good: A")
}
    else if (percentage >= 60) {
    document.write(" Remarks Fair: B")
}
    else if (percentage >= 50) {
    document.write("Remarks Poor: C")
}
    else if (percentage >= 40) {
    document.write("Remarks Permote :D")
}
    else if (percentage >= 33) {
    document.write(" Remarks You need very hard work: Your Grade is E")
}
else {
    Document.write("You Are Fail Beta")
}


