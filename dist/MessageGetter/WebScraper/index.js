"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBomDia = void 0;
const axios_1 = __importDefault(require("axios"));
const jsdom_1 = require("jsdom");
const TEST_URL = "https://www.mundodasmensagens.com/mensagens-bom-dia/";
const getHTML = (url) => {
    return axios_1.default.get(url).then((resp) => new jsdom_1.JSDOM(resp.data));
};
const getBomDia = async () => {
    const html = await getHTML(TEST_URL);
    const messages = html.window.document.getElementsByClassName("copy-text");
    const sanitizedMessages = [...Array.from(messages)].map((el) => el.innerHTML.replace(/<br>/g, "\n"));
    return sanitizedMessages;
};
exports.getBomDia = getBomDia;
