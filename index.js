var arg = 0;


function increment() {
    arg++;
    document.getElementById('a').innerText = arg + "kg";
}
function decrement() {
    arg--;
    document.getElementById('a').innerText = arg + "kg";
    if (arg <= 0) {
        document.getElementById('a').innerText = 0;
    }
}

