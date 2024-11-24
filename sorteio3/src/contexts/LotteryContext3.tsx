import {  useState } from "react";
import { createContext } from "vm";
import { LotteryContextProps, Props, ProviderProps, ThemeProps } from "../types";
import { timemania } from "../themes";


export const LotteryContext3 = createContext({} as LotteryContextProps);

export function LotteryProvider({children}:ProviderProps){
    const [timemania,setTimemania]= useState<Props|undefined>();
    return (<LotteryContext3.Provider value={{timemania}}>
        {children}
    </LotteryContext3.Provider>

    )
}
