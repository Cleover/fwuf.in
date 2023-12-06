const time = document.getElementById("time");

let counter = 5;
time.innerHTML = counter;

setInterval(() => {
  counter--;
  time.innerHTML = counter;

  if (counter === 0) {
    window.location.href = "https://fwuf.in";
  }
}, 1000);
