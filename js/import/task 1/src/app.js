import { getRandomColor } from "./utils";

export default function initApp() {
  console.log("Hello world");
  const body = document.querySelector("body");
  const btn = document.createElement("button");
  btn.classNames = "button";
  btn.innerText = "Изменить цвет страницы";

  body.append(btn);

  btn.addEventListener("click", () => {
    const newBgColor = getRandomColor();
    body.style.backgroundColor = newBgColor;
  });
}
