import {  useState } from "react";
import { createContext } from "vm";
import { LotteryContextProps, Props, ProviderProps} from "../types";



export const LotteryContext2 = createContext({} as LotteryContextProps);

export function LotteryProvider({children}:ProviderProps){
    const [lotofacil, setLotofacil]= useState<Props|undefined>();
    return (<LotteryContext2.Provider value={{lotofacil}}>
        {children}
    </LotteryContext2.Provider>

    )
}