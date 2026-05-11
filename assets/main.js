const terminal = document.getElementById("terminal");
const cmd = document.getElementById("cmd");
const output = document.getElementById("output");

// Toggle terminal with `
document.addEventListener("keydown", (e) => {
  if (e.key === "t") {
    terminal.classList.toggle("hidden");
    cmd.focus();
  }
});

function print(text) {
  output.innerHTML += "<br>> " + text;
  output.scrollTop = output.scrollHeight;
}

cmd.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = cmd.value.trim().toLowerCase();

    print(value);

    if (value === "help") {
      print("commands: open home, open projects, open skills, open products, contact");
    }

    else if (value === "open home") {
      window.location.href = "index.html";
    }

    else if (value === "open projects") {
      window.location.href = "projects.html";
    }

    else if (value === "open skills") {
      window.location.href = "skills.html";
    }

    else if (value === "open products") {
      window.location.href = "products.html";
    }

    else if (value === "contact") {
      window.location.href = "contact.html";
    }

    else {
      print("unknown command");
    }

    cmd.value = "";
  }
});
