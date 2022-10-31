import express from 'express';
import { MundoDasMensagens, BelasMensagens } from './Router/index';

const app = express();

app.use('/mundodasmensagens', MundoDasMensagens());
app.use('/belasmensagens', BelasMensagens());

app.listen(5050);
