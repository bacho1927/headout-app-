import { Outlet } from "react-router-dom"
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Slide from './Slide';
import Download from './Download';
import Media from './Media'
import Footer from './Footer';

function Layout() {
    return (
        <div>
            <Navbar />
            <Slide />
            <Searchbar />
            <Outlet />
            <Download />
            <Media />
            <Footer />
        </div>
    )
}

export default Layout
