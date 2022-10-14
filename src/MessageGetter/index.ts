import express from "express";
import { getBomDia } from "./WebScraper";

const router = express.Router();

router.get("/bom-dia", async (req, res) => {
  const messages = await getBomDia();
  res.send(messages);
});

export default router;
