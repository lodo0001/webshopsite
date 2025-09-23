const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type; // "alkohol" eller "alkoholfri"
    if (type === "alkohol") {
      alert("Denne drik indeholder alkohol!");
    } else {
      alert("Denne drik er alkoholfri.");
    }
  });
});
