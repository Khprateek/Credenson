import './Navbar.scss';
import Image from "next/image"
import Link from "next/link";
import Menu from "../Menu/Menu";
import SearchBar from "./SearchBar/SearchBar";
import NavIcons from "./NavIcons/NavIcons";
const Navbar = () => {
    return (
        <div className="head">


            <div className="scontent">
                <Link href="/">
                    <div className="logo">
                        CREDENSON
                    </div>
                </Link>
                <Menu />
            </div>


            <div className="lcontent">

                <div className="left">
                    <Link href="/" className='logo'>
                        <Image src ="/logo.png" alt =""width={150} height={42}/>
                    </Link>
                <div className="menuitems">
                    <Link href ="/">HomePage</Link>
                    <Link href ="/">Shop</Link>
                    <Link href ="/">Deals</Link>
                    <Link href ="/">About</Link>
                    <Link href ="/">Logout</Link>
                    <Link href ="/">Cart</Link>
                </div>
                </div>


                <div className="right">
                    <SearchBar/>
                    <NavIcons/>
                </div>


            </div>


        </div>
    );
}
export default Navbar