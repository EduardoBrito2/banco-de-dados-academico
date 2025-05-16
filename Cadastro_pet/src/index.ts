import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Pet from './models/pet';


const app = express();
const PORT = 3000;
const Mongodb_URI = 'mongodb://localhost:27017/pets';

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

mongoose.connect(Mongodb_URI)
    .then(()=>console.log("MongoDB conectado"))
    .catch(err => console.log("Erro ao conectar ao MongoDB:", err))

app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
