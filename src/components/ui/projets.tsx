'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import energie from '@/energie-h.png'
import kaizen from '@/kaizen.png'
import swear from '@/swear.png'
import page from '@/page.png'
import Image from 'next/image';
import { useState } from "react"
import Link from "next/link"
import { Meteors } from "./meteors"

export function Projets () {




    const [drop, setDrop] = useState('')

    return <>
     <h2 className='text-2xl text-center text-white font-semibold'>Projets</h2>
     

<div className='w-full mt-1 flex justify-center'>

  <div className='my-[20px] flex justify-center w-[80%] md:w-[600px] text-center'>

              <Carousel opts={{loop:true}} className='w-[80%] max-w-[500px]'>
          <CarouselContent className='px-5 py-5'>
              <CarouselItem className="basis 1/3">
                <Link href={'https://swear-shop.com/'}>

                          <div onMouseOver={() => setDrop('swear')} 

            onMouseLeave={() => setDrop('')} className="relative text-xl bg-[hsl(242,40%,12%)] h-[200px] border-[3px] text-white border-[rgb(59,130,246)] shadow-[0px_0px_20px_rgba(59,130,246,1)]   px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-center items-center cursor-pointer">
          <Meteors number={20} />
          <Image
                            className='relative bottom-5'
                                src={swear}
                                width={80}
                                alt="Picture of the author"
                            /> 
                            <h1>Swear</h1>
        </div>
                </Link>
              </CarouselItem>

              <CarouselItem className="basis 1/3">
                <Link href={'https://lapagedapres.fr/'}>
        <div onMouseOver={() => setDrop('page')} 
            onMouseLeave={() => setDrop('')}
             className="border-[rgb(59,130,246)] border-[3px] shadow-[0px_0px_10px_rgba(59,130,246,1)]  relative text-xl bg-[hsl(242,40%,12%)] h-[200px] text-white  px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-center items-center cursor-pointer">
          <Meteors number={20} />
          <Image
                            className='relative bottom-5'
                                src={page}
                                width={40}
                                alt="Picture of the author"
                            /> 
                            <h1>La Page d'Après</h1>
        </div>
              </Link>
              </CarouselItem>
 
   

        
      
              <CarouselItem className="basis 1/3">
                <Link href={'https://energieanimale.fr/'}>   
            <div onMouseOver={() => setDrop('page')} 
            onMouseLeave={() => setDrop('')}
            className="border-[rgb(59,130,246)] border-[3px] shadow-[0px_0px_10px_rgba(59,130,246,1)]  relative text-xl bg-[hsl(242,40%,12%)] h-[200px] text-white  px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-center items-center cursor-pointer">
            <Meteors number={20} />
          <Image
                            className='relative bottom-5'
                                src={energie}
                                width={70}
                                alt="Picture of the author"
                            /> 
                            <h1>Energie Animale</h1>
        </div>
        </Link>
              </CarouselItem>
              <CarouselItem className="basis 1/3">
            <div onMouseOver={() => setDrop('page')} 
            onMouseLeave={() => setDrop('')} 
            className="border-[rgb(59,130,246)] border-[3px] shadow-[0px_0px_10px_rgba(59,130,246,1)]  relative text-xl bg-[hsl(242,40%,12%)] h-[200px] text-white  px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-center items-center">
            <Meteors number={20} />
          <Image
                            className='relative bottom-5'
                                src={kaizen}
                                width={50}
                                alt="Picture of the author"
                            /> 
                            <h1>Kaisen</h1>
                            <p>- En cours -</p>
        </div>
 
              </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex"/>
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        </div>

</div>
</>

}