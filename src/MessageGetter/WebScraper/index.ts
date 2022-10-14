import axios from "axios";
import { JSDOM } from "jsdom";

const TEST_URL = "https://www.mundodasmensagens.com/mensagens-bom-dia/";

const getHTML = (url: string) => {
  return axios.get(url).then((resp) => new JSDOM(resp.data));
};

export const getBomDia = async () => {
  const html = await getHTML(TEST_URL);
  const messages = html.window.document.getElementsByClassName("copy-text");
  const sanitizedMessages = [...Array.from(messages)].map((el) =>
    el.innerHTML.replace(/<br>/g, "\n")
  );

  return sanitizedMessages;
};
