//Задание_1
/*console.log(navigator);
console.log(location);
console.log(
  `На компьютере с ОС ${navigator.appVersion} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`
);*/

//Задание_2
/*const listItems = document.querySelectorAll("#list li");
listItems.forEach((item) => {
  console.log(item.textContent);
});
listItems.forEach((item, index) => {
  item.textContent = index;
});*/

//Задание_3
/*const elemForRemove = document.querySelectorAll(".forRemove");
elemForRemove.forEach((element) => {
  element.remove();
});*/

//Задание_4
/*const text = document.createElement("p");
text.textContent =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
text.style.fontSize = "36px";
text.style.fontWeight = "bold";
document.body.append(text);*/

//Задание_5
/*function addTagStyle(tag, color, content) {
  const link = document.createElement(tag);
  link.style.color = color;
  link.textContent = content;
  return link;
}
const tag = [addTagStyle("h1", "red", "Заголовок страницы")];
tag.forEach((element) => console.log(tag));
document.body.append(addTagStyle("p", "green", "Hello, world"));*/

//Задание_6
/*const tagSelect = document.querySelectorAll(".years");
for (let i = 1960; i <= 2020; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  tagSelect.append(option);
}*/

//Задание_7
/*const clients = [
  { name: "Женя", order: true },
  { name: "Кристина", order: true },
  { name: "Павел", order: false },
  { name: "Виолетта", order: false },
  { name: "Костя", order: true },
];
const ulTag = document.getElementById("clientList");
clients.forEach((element) => {
  const li = document.createElement("li");
  const status = element.order ? "оплатил" : "отменил";
  li.textContent = `Клиент ${element.name} ${status} заказ`;
  ulTag.appendChild(li);
});*/

//Задание_8
let linksArr = [
  "https://www.amazon.com/",
  "https://www.youtube.com/",
  "https://devby.io/",
  "https://www.google.com/",
  "https://apple.com/",
];
const div = document.createElement("div");
div.style.backgroundColor = "blue";
div.style.padding = "20px";
div.style.textAlign = "center";
linksArr.forEach((link) => {
  const a = document.createElement("a");
  a.href = link;
  a.textContent = link;
  a.style.color = "white";
  a.style.marginRight = "15px";
  a.style.textDecoration = "none";
  div.appendChild(a);
});
document.body.appendChild(div);
