// У вас есть список элементов (<li>). При загрузке страницы проверьте условие
//(например, длина списка). Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.

// const ul = document.getElementById("ul");
// const lastli = document.getElementsByTagName("li");

// if (lastli.length > 4) {
//   const newEl = document.createElement("li");
//   newEl.textContent = "hi Family";
//   ul.replaceChild(newEl,  lastli[lastli.length -1]);
// }
const listDesObsts= document.getElementById("listDesObsts");

const eineSache = document.querySelectorAll("li");

if (eineSache.length > 4) {

  const newChild = document.createElement("li");

  newChild.textContent = "hi Family";

  listDesObsts.replaceChild(newChild,  eineSache[eineSache.length -1]);

}