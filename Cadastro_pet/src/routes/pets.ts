import express from "express";
import Pet from "../models/pet";

const router = express.Router();

router.post('/pet',async(req, res)=>{
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

router.get('/pet',async(req, res)=>{
    try{
        const pets = await Pet.find();
        res.json(pets)
    }catch(error){
        res.status(500).json({error:"erro ao buscar"});
    }
})

router.put('/:id',async(req, res)=>{
    try{
        const petAtualizado = await Pet.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json(petAtualizado);
    }catch(error){
        res.status(400).json({erro:"erro ao atualizar pet"})
    }
})

router.delete('/:id',async(req, res)=>{
    try{
        await Pet.findByIdAndDelete(req.params.id);
        res.json({messagem:"pet removido com sucesso"})
    }catch(error){
        res.status(500).json({error:"erro ao deletar pet"});
    }
})