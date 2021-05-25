var txt = "";
var i;

for (i = 20; i < 31; i++) {
    if (i % 2 === 0) {
        txt += i + " is Even " + "<br>";
    } else {
        txt += i + " is Odd" + "<br>";
    }

}

document.getElementById("demo").innerHTML = txt;