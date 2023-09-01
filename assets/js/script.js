/*function pintar() {
  ele.style.backgroundColor = "yellow";
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);*/

/*ejercicio 3.2*/

const pintar = (item) => (item.style.backgroundColor = "yellow");
document
  .getElementById("ele1")
  .addEventListener("click", ({ target }) => pintar(target));
