var arg = 0;

function increment(e) {
  e.preventDefault();
  arg + 1;
  document.getElementById("a").innerText = arg + "kg";
}

function decrement(e) {
    e.preventDefault()
  arg-1;
  document.getElementById("a").innerText = arg + "kg";
  if (arg <= 0) {
    document.getElementById("a").innerText = 0;
  }
}
