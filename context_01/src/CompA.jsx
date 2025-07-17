import CompB from './CompB.jsx'
import { useState,createContext } from 'react'
import './index.css'
export const CountContext = createContext();
export default function CompA() {
     
    const [count, setCount] = useState(50);
    return(
    <div className="bg-blue-500 text-white p-4 rounded-lg">
        A BOX
        <CountContext.Provider value={count}>
            <CompB/>
        </CountContext.Provider>
    </div>
    )

}