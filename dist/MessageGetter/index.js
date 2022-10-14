"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WebScraper_1 = require("./WebScraper");
const router = express_1.default.Router();
router.get("/bom-dia", async (req, res) => {
    const messages = await (0, WebScraper_1.getBomDia)();
    res.send(messages);
});
exports.default = router;
