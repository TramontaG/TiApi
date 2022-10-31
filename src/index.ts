import express from 'express';
import { MundoDasMensagens, BelasMensagens, MensagensComAmor } from './Router/index';

const app = express();

app.use('/mundodasmensagens', MundoDasMensagens());
app.use('/belasmensagens', BelasMensagens());
app.use('/mensagenscomamor', MensagensComAmor());

app.listen(process.env.PORT || 5050);
