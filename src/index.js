import express from 'express';
import cors from 'cors'
import estudantesRoutes from './routes/estudantes.js';
import authRoutes from './routes/auth.js';
import caronaParticipantesRoutes from './routes/carona_participantes.js';
import caronaRoutes from './routes/caronas.js';

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ mensagem: 'Seja bem vindo ao Carona Universitaria' })
})

// rotas
app.use('/auth', authRoutes);
app.use('/estudantes', estudantesRoutes);
app.use('/caronas', caronaRoutes);
app.use('/carona-participantes', caronaParticipantesRoutes);

app.listen(PORT, HOST, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
