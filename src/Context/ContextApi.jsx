import { createContext } from "react";

export const contextApi=createContext()


export const ContextApiProvider =({children})=>{

    return <contextApi.Provider value={{name:"subham"}}>{children}</contextApi.Provider>
}