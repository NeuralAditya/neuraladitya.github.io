const bootText = document.getElementById("bootText");
const bootScreen = document.getElementById("bootScreen");

const bootSequence = [
  "initializing neural system...",
  "loading core modules...",
  "establishing secure connection...",
  "decrypting UI layers...",
  "injecting portfolio runtime...",
  "system ready ✔",
  "welcome, Aditya"
];

let i = 0;

function typeBootLine() {
  if (i < bootSequence.length) {
    bootText.innerHTML += bootSequence[i] + "\n";
    i++;
    setTimeout(typeBootLine, 700);
  } else {
    setTimeout(() => {
      bootScreen.style.opacity = "0";
      bootScreen.style.transition = "1s ease";
      setTimeout(() => {
        bootScreen.style.display = "none";
      }, 1000);
    }, 800);
  }
}

window.addEventListener("load", () => {
  typeBootLine();
});
const terminal = document.getElementById("terminal");
const cmd = document.getElementById("cmd");
const output = document.getElementById("output");

// toggle terminal with `
document.addEventListener("keydown", (e) => {
  if (e.key === "`") {
    terminal.classList.toggle("hidden");
    cmd.focus();
  }
});

function log(text) {
  output.innerHTML += "<br>> " + text;
}

cmd.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const v = cmd.value.toLowerCase();
    log(v);

    if (v === "help") {
      log("open home | open projects | open skills | open products | contact");
    }

    else if (v === "open home") location.href = "index.html";
    else if (v === "open projects") location.href = "projects.html";
    else if (v === "open skills") location.href = "skills.html";
    else if (v === "open products") location.href = "products.html";
    else if (v === "contact") location.href = "contact.html";
    else log("unknown command");

    cmd.value = "";
  }
});
function openProduct(type) {
  const modal = document.getElementById("productModal");
  const details = document.getElementById("productDetails");

  modal.classList.remove("hidden");

  if (type === "ai") {
    details.innerHTML = `
      <h2>AI Founder OS</h2>
      <p>Complete automation system for founders.</p>
      <ul>
        <li>Idea validation engine</li>
        <li>AI prompt workflows</li>
        <li>Startup automation tools</li>
      </ul>
    `;
  }

  if (type === "trade") {
    details.innerHTML = `
      <h2>Trading AI Engine</h2>
      <p>Machine learning based market prediction system.</p>
      <ul>
        <li>Time series analysis</li>
        <li>ML prediction models</li>
        <li>Risk analysis system</li>
      </ul>
    `;
  }
}

function closeProduct() {
  document.getElementById("productModal").classList.add("hidden");
}
