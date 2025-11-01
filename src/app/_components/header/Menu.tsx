import HamburgerNavbar from "@/app/_components/header/HamburgerNavbar";
import { Navbar } from "./Navbar";

export default function Menu() {

    return (<>
        {/* меню на мобилках */}
        <HamburgerNavbar />
        {/* меню на десктопах */}
        <Navbar />
    </>
    );
}