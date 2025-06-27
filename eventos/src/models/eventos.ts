import mongoose from "mongoose";

const EventoSchema = new mongoose.Schema({
    titulo:{type:String,required:true},
    descricao:{type:String,required:false},
    data:{type:Date, required:true},
    local:{type:String,required:true},
    valor:{type:Number,required:true}
});

const Evento = mongoose.model('Expense',EventoSchema);
export default Evento;