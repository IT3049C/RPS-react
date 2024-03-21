import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function Layout() {
    return <>
        <Navbar />
        <Outlet />
        <p>hjgsdajkfgsadkfhjkhsdgfjhk</p>
    </>
}

export default Layout;