import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";


const ToastContext = createContext();


export const ToastContextProvider = ({ children }) => {

    const [toastVis, setToastVis] = useState({ vis: false, msg: null });

    return (
        <ToastContext.Provider value={{ toastVis, setToastVis }}>
            {toastVis.vis && <Toast msg={toastVis.msg} />}
            {children}
        </ToastContext.Provider>
    )
}

export const useToastContext = () => useContext(ToastContext);