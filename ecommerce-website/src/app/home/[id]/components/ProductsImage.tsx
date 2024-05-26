"use client";
import Image from "next/image"
import { useState } from "react";

interface ImageCOmponentType {
    src: string,
    active: boolean,
    handleClick: any
}
const ImageComponent = ({ src, active, handleClick } : ImageCOmponentType) => {
    return (
        <button 
            onClick={handleClick}
        >
            <Image 
            height={192}
            width={200}
            className={`w-full max-h-[192px] ${active ? "border-secondary border-[2px]": ""}`}
            src={src}
            alt=""
            role="button"
        />
        </button>
        
    )
}

interface NavigateButtonsType {
    src: string,
    handleClick: any,
    clx: string
}
const NavigateButtons = ({ src, handleClick, clx }: NavigateButtonsType) => {
    return (
        <button
            onClick={handleClick}
            className={`absolute top-[50%] -translate-y-1/2 ${clx}`}
        >
            <Image 
                src={src}
                width={50}
                height={50}
                alt="button"
            />
        </button>
    )
}

interface idType {
    id: string
}



const images : string[] = ["/produc details small 1.svg", "/produc details small 1.svg", "/produc details small 1.svg", "/produc details small 1.svg"]

const ProductsImage = ({ id } : idType) => {

    const [number, setNumber] = useState<number>(0);

    const handleClick = ( id : number) => {
        setNumber(id);
    }

    const handleSubtractNumber = () => {

        setNumber(prev =>{
            if(number === 0) return images.length - 1;
            return prev -1
        })
    }

    const handleAddNumber = ()=> {
        setNumber(prev =>{
            if(number === (images.length - 1)) return 0;
            return prev + 1
        })
    }
   

  return (
    <section
        
    >
        <div
            className="relative"
        >
            <Image 
                src={images[number]}
                height={813}
                width={848}
                alt="Product Image"
                className="w-full"
            />
            
            <NavigateButtons 
                src="/left button.svg"
                clx="left-[24px]"
                handleClick={handleSubtractNumber}
            />
            <NavigateButtons 
                src="/right button.svg"
                clx="right-[24px]"
                handleClick={handleAddNumber}
            />
        </div>
        <div
            className="grid grid-cols-4 gap-[16px] mt-[45px]"
        >
            {images.map((item, id) => (
                <ImageComponent 
                    src={item} 
                    key={id} 
                    active={number === id}
                    handleClick={()=>handleClick(id)}
                />
            ))}
        </div>
    </section>
  )
}

export default ProductsImage