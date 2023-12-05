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

document.addEventListener("mousemove", function (e) {
  const cursor = document.querySelector(".circle-cursor");
  const grid_2 = document.querySelector("#grid-2");

  const mouseX = e.clientX;
  const mouseY = e.clientY;
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;

  // make the grid-2 clip-path follow the cursor
  grid_2.style.clipPath = `circle(10em at ${mouseX}px ${mouseY}px)`;
});
