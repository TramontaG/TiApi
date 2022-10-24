import axios from "axios";
import WebSiteCacheService from "src/CacheService";
import { JSDOM } from "jsdom";

const TEST_URL = "https://www.mundodasmensagens.com/mensagens-bom-dia/";
const webCache = new WebSiteCacheService((html: string) => new JSDOM(html));


const getHTML = (url: string) => {
  return axios.get<string>(url).then((resp) => resp.data);
};

export const getBomDia = async () => {
  const html = await webCache.getWebsite("bom-dia", () => getHTML(TEST_URL));
  const messages = html.window.document.getElementsByClassName("copy-text");
  const sanitizedMessages = [...Array.from(messages)].map((el) =>
    el.innerHTML.trim().replace(/<br>/g, "\n")
  );

  return sanitizedMessages;
};
