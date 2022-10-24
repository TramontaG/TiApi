import express from "express";
import BomDia from "./MessageGetter";

const app = express();

app.use("/messages", BomDia);

app.listen(5050);
