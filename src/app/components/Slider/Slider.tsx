"use client"
import Image from "next/image"
import Link from "next/link";
import './Slider.scss';
import { useEffect, useState } from "react";
import { setInterval } from "timers/promises";
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
            img : "/Images/Homepages/tittan1.png",
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

        // useEffect(() => {
        //   const interval = setInterval(() => {
        //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        //   }, 3000);

        //   return () => clearInterval(interval);
        // }, []);

    return (
        <div className="slider">
            <div className="wrapper" style={{ transform: `translateX(-${current * 100}vw)` }}>
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
            <div className="slide">
                {
                    slides.map((slide,index)=>(
                        <div 
                        className={`threedot ${current === index ? 'active' : ''}`} 
                        key = {slide.id}
                        onClick={() => setCurrent(index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Slider