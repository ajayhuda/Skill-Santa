const num1 = prompt(parseFloat("Enter Value"));

if (num1 >= 50 && num1 <= 100) {
    document.getElementById("demo").innerText = "Your Integer Lies inside the list '50-100'.";
} else {
    document.getElementById("demo").innerText = "Sorry!! Your Integer Lies outside the list";
}