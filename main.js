// // ex 1

// let input = document.querySelector(".inpt");
// let btn = document.querySelector(".btn");

// document.addEventListener("click", ()=> {
//     btn.textContent = input.value;
// });

// // ex 2

// let image = document.querySelector(".image")
//   image.setAttribute("src", "https://img3.akspic.ru/previews/1/6/5/3/7/173561/173561-dodge-legkovyye_avtomobili-dodge_challenger_2021_goda-sportkar-dodzh_chardzher_srt_megeru-550x310.jpg");

// // ex 3

// let link = document.querySelector(".link")
// let img = document.querySelector(".img");
// link.setAttribute('href', 'https://img2.akspic.ru/crops/6/2/4/8/6/168426/168426-dodzh_chellendzher-dodzh_demon-dodge-krajsler_neon-legkovyye_avtomobili-3840x2160.jpg')
// img.setAttribute("alt", "photo about yellow car");

// // ex 4

// let li = document.querySelector('.lishka')
// li.textContent = 'This is new text'

let input = document.querySelector(".inpt");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  if ((input = input.value)) {
    alert("Обидва поля заповнені");
  } else {
    alert("Не всі поля заповнені");
  }
});
// ex 2
let getButton = document.querySelector(".but");
let getInput1 = document.querySelector(".text-input1");
let getInput2 = document.querySelector(".text-input2");

function getPerimetr() {
  let a = getInput1.value;
  let b = getInput2.value;
  getInput2 = Number(a);
  getInput1 = Number(b);
  let perimetr = getInput1 + getInput2;
  if (perimetr > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
}
getButton.addEventListener("click", getPerimetr);
// ex 3
let text1 = document.querySelector(".text1");
let btn1 = document.querySelector(".button1");
btn1.addEventListener("click", () => {
  text1.value.includes("Java-!-s-!-cript")
    ? alert("Текст містить слово JavaScript")
    : alert("Текст не містить слово Java-!-S-!-cript");
});
// ex 4
let text = document.querySelector(".text-input");
let inpt = document.querySelector(".text-inpt");
let but = document.querySelector(".out");

but.addEventListener("click", () => {
  if (text.value > 10 && inpt.value < 20) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
});
// ex 5
function valueS(str) {
  return document.getElementById(str).value;
}

function unvalidForm() {
  let name = valueS("name");
  let email = valueS("email");
  let password = valueS("password");

  name.length < 3 ||
  email.indexOf("@") === -1 ||
  email.indexOf(".") === -1 ||
  password.length < 6
    ? alert("Помилка: неправильно заповнені дані!")
    : (window.location.href = "iнша-сторінка.html");
}
