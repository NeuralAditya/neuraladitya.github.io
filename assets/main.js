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
