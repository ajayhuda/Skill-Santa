var dob = new Date(prompt("Enter your Date of Birth"));

var monthDiff = Date.now() - dob.getTime();
var ageDate = new Date(monthDiff);

//extract year from date    
var year = ageDate.getUTCFullYear();

//now calculate the age of the user
var age = Math.abs(year - 1970);
document.getElementById("demo").innerHTML = link.href;

if (age <= 18 && age >= 45) {
    var link = window.document.createElement("a");
    var str = window.document.getElementById("demo").value;
    link.textContent = str;
    link.href = 'https://selfregistration.cowin.gov.in';
    document.getElementsByTagName('body')[0].appendChild(link);



}

document.write("Age of the date entered: " + age + " years");