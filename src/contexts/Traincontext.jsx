import { createContext, useContext, useState } from "react";



const TrainContext = createContext();

export const TrainContextProvider = ({ children }) => {
    const [trainDataVisiblity, setTrainDataVisiblity] = useState(false);

    return (

        < TrainContext.Provider value={{ trainDataVisiblity, setTrainDataVisiblity }} >
            {children}
        </TrainContext.Provider >

    );
}


export const useTrainContext = () => useContext(TrainContext);