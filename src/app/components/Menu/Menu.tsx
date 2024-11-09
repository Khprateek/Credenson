"use client"
import Image from "next/image"
import { useState } from "react"
import './Menu.scss';
import Link from "next/link";
const Menu = () => {
    const [open,setOpen] = useState(false)

    return (
        <div className="menu">
            <Image src ="/menu.png" alt ="Not Available" width={28} height={28} onClick={()=>setOpen((prev)=>!prev)}/>
            {
                open && (
                    <div className="sidedrop">
                        <Link href ="/">HomePage</Link>
                        <Link href ="/">Shop</Link>
                        <Link href ="/">Deals</Link>
                        <Link href ="/">About</Link>
                        <Link href ="/">Logout</Link>
                        <Link href ="/">Cart</Link>
                    </div>
                )
            }
        </div>
    );
}
export default Menu;