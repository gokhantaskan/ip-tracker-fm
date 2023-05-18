import { getData } from "../api/getData";
import { setUiWithData } from "../utils/data";

document.querySelector("form")?.addEventListener("submit", async event => {
  event.preventDefault();

  const formEl = event.target as HTMLFormElement;
  const searchInput = formEl.querySelector("input");
  const submitBtn = formEl.querySelector("[type='submit']");

  const searchValue = searchInput?.value;
  submitBtn?.setAttribute("disabled", "true");

  if (searchValue) {
    await getData(searchValue)
      .then(data => {
        if (data) setUiWithData(data);
        // searchInput.value = "";
      })
      .catch(err => {
        alert(err.message);
      })
      .finally(() => {
        submitBtn?.removeAttribute("disabled");
      });
  }
});
