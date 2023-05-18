import NProgress from "nprogress";

import type { Data } from "../types/data";
import { validateAddress } from "../utils/address";

const endpoint = process.env.ENDPOINT as string | undefined;
const apiKey = process.env.API_KEY as string | undefined;

export async function getData(search?: string): Promise<Data | null> {
  if (!endpoint || !apiKey) throw new Error("Invalid endpoint or API key");

  NProgress.start();

  const url = new URL(endpoint);
  url.searchParams.append("apiKey", apiKey);

  if (search) {
    const ipOrDomain = validateAddress(search);

    if (ipOrDomain) {
      url.searchParams.append(ipOrDomain, search);
    } else if (search !== "findme") {
      throw new Error("Invalid IP or Domain address");
    }
  }

  const res = await fetch(url, { method: "GET" })
    .then(response => response.json())
    .then((data: Data) => {
      return data;
    })
    .catch(error => {
      console.error("Fetch error in 'getData.ts':", error);
      return null;
    });

  NProgress.done(true);

  return res;
}
