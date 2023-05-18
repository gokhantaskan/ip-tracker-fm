import { debounce } from "lodash-es";

// import map from "./map";

// Set the padding on page load
setPadding();

window.addEventListener(
  "resize",
  debounce(setPadding, 250, {
    maxWait: 500,
    leading: false,
    trailing: true,
  }),
  true
);

function setPadding() {
  const offsetHeight = resultsHeight();
  const headerEl = document.querySelector("header");

  if (!headerEl) {
    throw new Error("No header tag found");
  }

  // Remove the padding-bottom property so it won't aggregate
  headerEl.style.removeProperty("padding-bottom");

  const headerElPaddingBottom = parseInt(getComputedStyle(headerEl).paddingBottom);

  // If padding-bottom wasn't in pixels or wasn't set, parseInt could return NaN
  if (isNaN(headerElPaddingBottom)) {
    throw new Error(`Unable to parse header padding-bottom value: ${headerElPaddingBottom}`);
  }

  // Set the padding-bottom to half of the offsetHeight, regardless of the current padding
  const totalPadding = headerElPaddingBottom + offsetHeight / 2;
  headerEl.style.setProperty("padding-bottom", `${totalPadding}px`);

  // if (map) map.invalidateSize();
}

function resultsHeight() {
  return document.getElementById("results")?.offsetHeight ?? 0;
}
