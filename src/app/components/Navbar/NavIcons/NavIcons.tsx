"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import './NavIcons.scss'
import CartModal from "../cartModal/cartmodal";
const NavIcons = () => {
    const [isProfileOpen, setisProfileOpen] = useState(false);
    const [iscartOpen, setiscartOpen] = useState(false);

    const router = useRouter();

    const isLoggedIn = false;
    const handleProfile = () =>{
        if(!isLoggedIn){
            router.push("/login");
        }
        setisProfileOpen((prev) => !prev);
    };
    return (
        <div className="Ico">
            <Image className="profile" src="/profile.png" alt="" width={22} height={22} onClick={handleProfile}/>
            {isProfileOpen && <div className="pop">
                <Link href = "/">Profile</Link>
                <div className="logout">Logout</div>
                </div>
                }
            <Image className="notification" src="/notification.png" alt="" width={22} height={22}/>
            <div className="cart">
                <Image src="/cart.png" alt="" width={22} height={22} onClick={()=>setiscartOpen((prev)=> !prev)}/>
                <div className="superscript" onClick={()=>setiscartOpen((prev)=> !prev)}>
                    2
                </div>
            </div>
            {iscartOpen && <CartModal/>}
        </div>
    )
}
export default NavIcons