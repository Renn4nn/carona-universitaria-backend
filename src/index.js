import express from 'express';
import cors from 'cors'
import EstudanteRoutes from './routes/EstudanteRoutes.js';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());

// rotas
app.use('/api', EstudanteRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});