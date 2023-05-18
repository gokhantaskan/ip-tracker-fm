import * as L from "leaflet";

import map from "../js/map";
import type { Data } from "../types/data";

export function setUiWithData(data: Data) {
  const ip = document.querySelector("#ip .card__content__text") as HTMLParagraphElement;
  const timezone = document.querySelector("#tz .card__content__text") as HTMLParagraphElement;
  const location = document.querySelector("#loc .card__content__text") as HTMLParagraphElement;
  const isp = document.querySelector("#isp .card__content__text") as HTMLParagraphElement;

  ip.textContent = data.ip;
  timezone.textContent = data.location.timezone;
  location.textContent = `${data.location.region}, ${data.location.country}`;
  isp.textContent = data.isp;

  L.marker([data.location.lat, data.location.lng]).addTo(map);

  map.fitBounds([[data.location.lat, data.location.lng]], {
    duration: 1,
  });
}
