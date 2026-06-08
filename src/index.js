import express from 'express';
import cors from 'cors'
import estudantesRoutes from './routes/estudantes.js';
import authRoutes from './routes/auth.js';
import caronaParticipantesRoutes from './routes/carona_participantes.js';

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());

// rotas
app.use('/auth', authRoutes);
app.use(estudantesRoutes);
app.use(caronaParticipantesRoutes);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});