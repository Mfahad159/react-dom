
import { Outlet } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Api from './components/api/Api'
export default function Layout()
{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}