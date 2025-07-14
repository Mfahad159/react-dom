
import { Outlet } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";

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