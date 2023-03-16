import "./index.css";
import JS_IMG from "./assets/js.jpg";

const app = document.querySelector("#app");
console.log(app);

const title = document.createElement("h1");
title.innerText = "I love JavaScript";

const img = document.createElement("img");
img.src = JS_IMG;

app.append(title);
app.append(img);
