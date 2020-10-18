document.querySelectorAll(".viewAll").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const displayMode = document.querySelector(".hiddenP").style.display === "flex" ? "none" : "flex";
    document.querySelectorAll(".hiddenP").forEach(hiddenP => hiddenP.style.display = displayMode);
    const text = btn.innerHTML === "View all" ? "Collapse" : "View all";
    btn.innerHTML = text;
  });
});

document.querySelector("#openIcon").addEventListener("click", (e) => {
  document.querySelector("#menuIconWrapper").style.transform = "translate(-60px, 0)"
});

document.querySelector("#closeIcon").addEventListener("click", (e) => {
  document.querySelector("#menuIconWrapper").style.transform = "translate(60px, 0)"
});
