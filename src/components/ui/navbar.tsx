import Image from "next/image";
import logo from "@/logo.png";

export function  Navbar() {
  return (
    <div className="fixed backdrop-blur-lg z-10 w-full top-0 flex items-center justify-center px-[5px] sm:px-[50px] md:px-[150px] py-[10px] shadow-[0px_0px_10px_rgba(255,255,255,0.5)]"> 
                <Image
                  src={logo}
                  width={50}
                  alt="logo"
                /> 

                <div className="font-bold text-white text-sm sm:text-md lg:text-lg flex justify-around w-80 sm:w-80">
                      <p className='cursor-pointer custom'>Projets</p>
                      <p className='cursor-pointer custom'>Compétences</p>
                      <p className='cursor-pointer custom'>Contact</p></div>
                </div>
  );
}