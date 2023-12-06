function copyToClipboard() {
  const copyButton = document.getElementById("copyButton");
  const urlInput = document.getElementById("urlInput");
  let outputUrl = "https://fwuf.in/#/" + urlInput.value;
  navigator.clipboard.writeText(outputUrl);

  copyButton.innerHTML = "Copied!";

  setTimeout(() => {
    copyButton.innerHTML = "Copy";
  }, 1500);
}

let url = window.location.href.substring(window.location.origin.length);
if (url.startsWith("/#/")) {
  url = url.substring(3);
  if (url && !url.includes(window.location.origin)) {
    if (url.includes("://")) {
      console.log("opening url");
      window.open(url, "_self");
    } else {
      console.log("opening url");
      window.open("http://" + url, "_self");
    }
  }
}

const cursor = document.querySelector(".circle-cursor");
const grid_2 = document.querySelector("#grid-2");

let mouseX = 0;
let mouseY = 0;

let delay = 6;
let revisedMousePosX = 0;
let revisedMousePosY = 0;
let clipPathSize = 0;

let shown = false;

document.addEventListener("mousemove", function (e) {
  if (!shown) {
    revisedMousePosX = e.clientX;
    revisedMousePosY = e.clientY;

    grid_2.style.opacity = 1;
    cursor.style.opacity = 1;
    cursor.style.width = "20em";
    cursor.style.height = "20em";

    shown = true;

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    let start = null;
    const duration = 1000;
    const targetSize = 9.6;
    
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const normalizedProgress = Math.min(progress / duration, 1);
      clipPathSize = targetSize * easeInOutQuad(normalizedProgress);
    
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
    
    window.requestAnimationFrame(step);
    
  }
  mouseX = e.clientX;
  mouseY = e.clientY;
});



function delayMouseFollow() {
  requestAnimationFrame(delayMouseFollow);

  revisedMousePosX += (mouseX - revisedMousePosX) / delay;
  revisedMousePosY += (mouseY - revisedMousePosY) / delay;

  cursor.style.left = `${revisedMousePosX}px`;
  cursor.style.top = `${revisedMousePosY}px`;
  grid_2.style.clipPath = `circle(${clipPathSize}em at ${revisedMousePosX}px ${revisedMousePosY}px)`;
}
delayMouseFollow();
