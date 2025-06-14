import { ReactNode } from "react";

export interface LotteryContextProps{
    megasena:Props | undefined;
    lotofacil:Props| undefined;
}
export interface LotteryProps{
    megasena:Props;
    lotofacil:Props;
}
export interface Props{
    acumulado: boolean;
    concursoEspecial:boolean;
    dataApuracao:string;
    dataPorExtenso:string;
    dataProximoConcurso:string;
    dezenas:string[];
    numeroDoConcurso:number;
    quantidadeGanhadores:number;
    tipoPublicacao:number;
    tipoJogo:string;
    valorEstimadoProximoConcurso:number;
    valorPremio:number;
}
 export interface LotteryResultProps {
    megasena: LotteryProps['megasena'];
  }
  export interface LotoProps{
    lotofacil: LotteryProps['lotofacil']
  }
  export interface ProviderProps{
    children:ReactNode;
}