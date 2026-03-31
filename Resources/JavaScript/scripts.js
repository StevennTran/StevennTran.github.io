var mybutton = document.getElementById("backToTop");

let progress = document.getElementById('progressBar')
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    scrollFunction()
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function processText() {
  let text = document.getElementById("inputText").value;

  // Remove whitespace
  let noWhitespace = text.replace(/\s+/g, '');

  // Remove all 'a' characters (case-insensitive)
  let cleanedText = noWhitespace.replace(/["'.\n…]/g, '');

  document.getElementById("output").innerText = cleanedText;
}

function copyText() {
  let output = document.getElementById("output").innerText;
  let button = document.getElementById("copyBtn");

  navigator.clipboard.writeText(output)
    .then(() => {
      button.innerText = "Copied!";
      setTimeout(() => {
        button.innerText = "Copy to Clipboard";
      }, 1500);
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
}
