import { checkLocalStorage } from "./utils";
import { cookieBtn } from "./components/cookieBtn";

export default function initApp() {
  const cookiesFlag = checkLocalStorage();
  console.log(cookiesFlag);
  if (!cookiesFlag) {
    const btn = cookieBtn();
    console.log(btn);
    const body = document.querySelector("body");
    body.append(btn);
  }
  const btn = document.querySelector(".cookie-consent__button");

  btn.addEventListener("click", () => {});
}
