import mongoose from "mongoose";

export interface Pets extends Document{
    nome:string,
    especie:string,
    idade:number,
    contato:string;
}

const PetSchema = new mongoose.Schema({
    nome:{type:String, required:true},
    especie:{type:String, required:true},
    idade:{type:Number,required:true},
    tutor:{type:String,required:true},
    contato:{type:String}
})

const Pet = mongoose.model('pet',PetSchema);
export default Pet;