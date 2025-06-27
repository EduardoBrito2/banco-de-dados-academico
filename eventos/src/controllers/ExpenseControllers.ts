import { Request, Response } from "express";
import Evento from "../models/eventos";


export const createEvent = async (req: Request, res: Response): Promise<void> => {
  console.log("Recebido no corpo:", req.body);
  try {
    const {titulo,descricao,data,local,valor} = req.body;
    const novoEvento = new Evento({titulo,descricao,data,local,valor});
    await novoEvento.save();
    res.status(201).json(novoEvento);
  } catch (error) {
    console.error(error);  // log do erro para detalhar
    res.status(400).json({ error: 'Erro ao cadastrar evento' });
  }
};
export const getEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const evento = await Evento.find();
    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar evento' });
  }
};

export const updateEvent = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const {titulo,descricao,data,local,valor} = req.body;
  try {
    const eventoAtualizado = await Evento.findByIdAndUpdate(
      id,
      { titulo,descricao,data,local,valor },
      { new: true }
    );
    if (!eventoAtualizado) {
      res.status(404).json({ error: "Evento não encontrado" });
      return;
    }
    res.json(eventoAtualizado);
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    res.status(400).json({ error: 'Erro ao atualizar evento' });
  }
}  
export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const eventoDeletado = await Evento.findByIdAndDelete(id);
    if (!eventoDeletado) {
      res.status(404).json({ error: "Evento não encontrado" });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar evento" });
  }
};

