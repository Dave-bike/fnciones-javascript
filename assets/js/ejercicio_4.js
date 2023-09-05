const mainBlock = document.querySelector("#main-block");
mainBlock.addEventListener("click", ({ target: item }) => {
  item.dataset.color === "boxes" && item.classList.toogle(".generic-color");
});

const pushKey = document.querySelector("#key");
const color = { a: "pink", s: "orange", d: "skyblue" };
const newBox = { q: "purple", w: "gray", e: "brown" };

document.addEventListener("keydown", ({ key }) => {
  pushKey.style.background = color[key] || "transparent";
  newBox[key] && newDiv(newBox[key]);
});

const newDiv = (color) => {
  const template = document.createElement("div");
  template.setAttribute("class", "boxes");
  template.setAttribute("style", `background : ${color};`);
  mainBlock.appendChild(template);
};
