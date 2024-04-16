import Image from "next/image";
import profil from "@/profil.jpg";
import { Spotlight } from "./spotlight";


export function Hero() {
    return (
        <div className='text-white z-10 px-[15px] flex flex-col py-[50px] mb-[50px] '>
        
          <div className='flex flex-col  mb-[30px] z-10 items-center justify-center '>
          <Image
                    className="rounded-full border-[3px] border-[rgb(59,130,246)] shadow-[0px_0px_30px_rgba(59,130,246,1)] mb-10 w-[150px] md:w-[200px]"
                  src={profil}  
                  alt="Picture of the author"
                /> 

            <div className="text-center">  
              <h2 className='text-2xl lg:text-[35px] font-bold mb-4 '>Pierre Potin</h2>
              <p className='text-xl font-semibold lg:text-[30px] mb-8' >Développeur web fullstack</p>
            </div>

          </div>

          <div className="border shadow-[0px_0px_10px_rgba(255,255,255,1)] border-[rgb(59,130,246)] mb-[40px] h-[1px]"></div>
     
        <p className='text-lg  leading-7 text-center px-5 py-5 bg-blue text-white font-bold'>Je crée des applications, des sites et programmes, <br></br> pour tout types de besoin et d'entreprise. </p>
      
      </div>
    )
}