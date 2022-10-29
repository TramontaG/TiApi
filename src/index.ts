import express from 'express';
import { MundoDasMensagens } from './Router/index';

const app = express();

app.use('/mundodasmensagens', MundoDasMensagens());

app.listen(5050);
