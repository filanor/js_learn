export const cookieBtn = () => {
  const btnBlock = document.createElement("div");
  btnBlock.className = "cookie-consent";
  btnBlock.innerHTML = `
    <p class="cookie-consent__text">
      Мы используем файлы cookie для наилучшего представления нашего сайта
    </p>
    <button class="cookie-consent__button">Прекрасно</button>
  `;

  const btn = btnBlock.querySelector(".cookie-consent__button");
  btn.addEventListener("click", () => {
    localStorage.setItem("cookieFlag", "on");
    btnBlock.remove();
  });

  return btnBlock;
};
