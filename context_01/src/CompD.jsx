
import './index.css'
import {useContext} from 'react'
import { CountContext } from './CompA'
export default function CompD() {

    const val = useContext(CountContext);
    return(
    <div className="bg-blue-500 text-white p-4 rounded-lg">
        D BOX
        <p>Count Value: {val}</p>
        {/* You can add more functionality or display more data here */}
    </div>
    )

}