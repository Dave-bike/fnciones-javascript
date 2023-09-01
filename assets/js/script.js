/*function pintar() {
  ele.style.backgroundColor = "yellow";
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);*/

/*ejercicio 3.2*/

/*function pintar(item) {
  return (item.style.backgroundColor = "yellow");
}
document
  .getElementById("ele1")
  .addEventListener("click", ({ target }) => pintar(target)); */

const pintar = (item, color = 'green') => item.style.backgroundColor = color
document
  .getElementById("ele1")
  .addEventListener("click", ({ target }) => pintar(target, "yellow"))
