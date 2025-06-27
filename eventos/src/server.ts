import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import EventosRoutes from './routes/EventosRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/evento')
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Erro ao conectar MongoDB:", err));

// Use as rotas
app.use('/eventos', EventosRoutes); // <-- prefixo da rota

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
