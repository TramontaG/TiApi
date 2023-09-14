import express from 'express';
import BelasMensagens from './Router/belasMensagens';

const app = express();

app.use('/', BelasMensagens);

app.listen(process.env.PORT || 5050);
