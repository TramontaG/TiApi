import express from 'express';
import { MundoDasMensagens, BelasMensagens } from './Router/index';
import { MensagensComAmor } from './Router/mensagensComAmor';

const app = express();

app.use('/mundodasmensagens', MundoDasMensagens());
app.use('/belasmensagens', BelasMensagens());
app.use('/mensagenscomamor', MensagensComAmor());

app.listen(5050);
