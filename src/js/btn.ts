import svg from "bundle-text:~/src/assets/img/icons/icon-arrow.svg";

// Put the svg icon in the submit button as an inline svg
const btn = document.querySelector("button[type='submit']");
if (btn) btn.innerHTML = svg;
