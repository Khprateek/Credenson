"use client"
import Image from "next/image"
import Link from "next/link";
import './Slider.scss';
import { useState } from "react";
    const slides =[
        {
            id : 1,
            title : "Trendy-Fashion",
            description : "Express your love for anime with stylish outfits. Explore our collection now!",
            img : "/Images/Homepages/mikasa.png",
            url : "/",

        }
        ,{
            id : 2,
            title : "Trendy-Fashion",
            description : "Express your love for anime with stylish outfits. Explore our collection now!",
            img : "/Images/Homepages/titan1.png",
            url : "/",

        }
        ,{
            id : 3,
            title : "Trendy-Fashion",
            description : "Express your love for anime with stylish outfits. Explore our collection now!",
            img : "/Images/Homepages/mikasa.png",
            url : "/",

        },
    ];

const Slider = () => {
    const [current,setCurrent] = useState(0)
    return (
        <div className="slider">
            <div className="wrapper">
                {slides.map(slide=>(
                    <div className="pages" key={slide.id}>
                        {/* TEXT CONTAINER */}
                        <div className="textcontainer">
                            <h1>{slide.title}</h1>
                            <h2>{slide.description}</h2>
                            <Link className="shop" href={slide.url} ><button>SHOP NOW</button></Link>
                        </div>
                        {/* IMAGE CONTAINER */}
                        <div className="imgcontainer">
                            <Image src={slide.img} alt="" fill sizes="100%" className="im"/>
                        </div>
                    </div>
                ))}
            </div>
            {
                slides.map(slide=>(
                    <div className="threedot" key = {slide.id}>
                        
                    </div>
                ))
            }
        </div>
    )
}
export default Slider