const mainBlock = document.querySelector("#main-block")

const pintar = (item, color) => item.style.backgroundColor = color
const boxes =  document.getElementsByClassName("boxes")
for (let box of boxes) {
  box.addEventListener("click", ({ target }) => pintar(target, "black"))
}

const pushKey = document.querySelector("#key");
const color = { a: "pink", s: "orange", d: "skyblue" };
const newBox = { q: "purple", w: "gray", e: "brown" };

document.addEventListener("keydown", ({ key }) => {
  pushKey.style.background = color[key] || "transparent";
  newBox[key] && newDiv(newBox[key]);
});


const newDiv = (color) => {
  
  const template = document.createElement("div");
  template.setAttribute("class", "box");
  template.setAttribute("style", `background : ${color};`);
  mainBlock.appendChild(template);
};
