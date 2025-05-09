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

app.post('/pet',async(req, res)=>{
    try{
        const novoPet = new Pet({
            nome:req.body.nome,
            especie:req.body.especie,
            idade:req.body.idade,
            tutor:req.body.tutor,
            contato:req.body.contato
        });
        const petSalvo = await novoPet.save();
        res.status(201).json(petSalvo);
    }catch(error){
        res.status(500).json({message:"erro ao cadastar",error});
    }
})

app.get('/pet',async(req, res)=>{
    try{
        const pets = await Pet.find();
        res.json(pets)
    }catch(error){
        res.status(500).json({error:"erro ao buscar"});
    }
})

app.put('/pet/:id',async(req, res)=>{
    const {id}= req.params;
    const {nome,especie,idade,tutor,contato}=req.body;
    try{
        const petAtualizado = await Pet.findByIdAndUpdate(id,{nome,especie,idade,tutor,contato},{new:true});
        if(!petAtualizado){
            return res.status(404).json({error:"pet não encontrado"});
        }
        res.json(petAtualizado);
    }catch(error){
        res.status(400).json({error:"erro ao atualizar pet"});
    }
})

app.delete('/pet/:id',async(req, res)=>{
    const{id} = req.params;
    try{
        const petDeletado = await Pet.findByIdAndDelete(id);
        if(!petDeletado){
            return res.status(404).json({error:"pet não encontrado"});
        }
        res.status(204).send();
    }catch(error){
        res.status(500).json({error:"erro ao deletar pet"});
    }
})