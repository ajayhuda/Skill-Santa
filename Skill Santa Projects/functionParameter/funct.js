var f = function() {
    document.getElementById("demo").innerText = "Hello World!";

}

function execute(fn) {
    fn();
}

execute(f);