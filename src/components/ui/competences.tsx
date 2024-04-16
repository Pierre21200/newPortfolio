

import logo from '@/logo.png'
import next from '@/next.png'
import Image from 'next/image'
import tailwind from '@/tailwind.png'
import typescript from '@/typescript.png'
import prisma from '@/prisma.png'
import vercel from '@/vercel.png'
import node from '@/node.png'
import postgres from '@/postgres.png'
import express from '@/express.png'
import mongodb from '@/mongodb.png'
import react from '@/react.png'
import stripe from '@/stripe.png'
import github from '@/github.png'
import heroku from '@/heroku.png'
import html from '@/html.png'
import css from '@/css.png'
import netlify from '@/netlify.png'
import javascript from '@/javascript.png'
import c from '@/c++.png'
import csharp from '@/csharp.png' 
import liquid from '@/liquid.png'
import wordpress from '@/wordpress.png'
import shopify from '@/shopify.png' 

export function Competences() {
    return (
        <div className='h-[500px] w-[95%] sm:w-[70%] flex flex-col text-center justify-between'>

          <h2 className='text-2xl text-white'>Compétences</h2>

        <div className='flex items-center w-full justify-around'>


          

        {/* <div className='p-5 w-[65px] hidden sm:block h-[65px] border-2  border-white rounded-xl bg-gray-50 opacity-50 '>
        <Image
                  src={shopify}
                  width={50}
                  alt="Picture of the author"
                /> 
        </div> */}

        {/* <div className='p-5 hidden sm:block border-2 w-[70px] h-[70px] border-white rounded-xl bg-gray-50 opacity-70 '>
              <Image
                  src={heroku}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
        </div> */}
 
            <div className='compt vercel relative p-5 h-[70px] w-[70px] sm:w-[80px] sm:h-[80px] border-[4px] border-[rgb(59,130,246)] shadow-[0px_0px_25px_rgba(59,130,246,1)] rounded-xl bg-gray-50  '>
              <Image
                  src={vercel}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </div>
          
          



          <div className='compt relative github p-5 h-[70px] w-[70px] sm:w-[80px] sm:h-[80px]  border-[4px] border-[rgb(59,130,246)] shadow-[0px_0px_25px_rgba(59,130,246,1)] rounded-xl bg-gray-50  '>
              <Image
                  src={github}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div>

          <div className='compt relative stripe p-5 sm:w-[80px] sm:h-[80px] h-[70px] w-[70px] border-[4px] border-[rgb(59,130,246)] shadow-[0px_0px_25px_rgba(59,130,246,1)] rounded-xl bg-gray-50  '>
              <Image
                  src={stripe}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div>
        
          {/* <div className='p-5 hidden sm:block h-[70px] w-[70px]  border-2 border-white rounded-xl bg-gray-50 opacity-70 '>
              <Image
                  src={netlify}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div> */}

          {/* <div className='p-5 hidden sm:block border-2 border-white rounded-xl bg-gray-50 opacity-50 w-[65px] h-[65px] '>
          <Image
                  src={wordpress}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div> */}

          {/* <div className='p-5 border-2 border-white rounded-xl bg-gray-50 opacity-30 w-[90px] h-[90px] '>
              
              </div> */}
          
          
        </div>
        
        <div className=' flex flex-col sm:flex-row items-center w-full justify-around sm:justify-between'>

        {/* <div className='p-5 hidden md:block border-2 border-white rounded-xl bg-gray-50 opacity-30 w-[65px] h-[65px] '>
        <Image
                  src={html}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />  
        </div> */}

        
        
        {/* <div className='p-5 hidden sm:block border-2 border-white rounded-xl bg-gray-50 opacity-50 w-[70px] h-[70px]'>
              <Image
                  src={javascript}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div> */}
          <div className='flex justify-around w-[80%] mb-[50px] sm:mb-0 sm:w-[50%]'>  

            <div className='compt relative next p-5 h-[70px] w-[70px] sm:w-[80px] sm:h-[80px] border-[4px] border-[rgb(59,130,246)] shadow-[0px_0px_25px_rgba(59,130,246,1)] rounded-xl bg-gray-50  '>
              <Image
                  src={next}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
            </div>

        

          <div className='compt relative react p-5 sm:w-[80px] sm:h-[80px] h-[70px] w-[70px]  border-[4px] border-[rgb(59,130,246)] shadow-[0px_0px_25px_rgba(59,130,246,1)] rounded-xl bg-gray-50  '>
              <Image
                  src={react}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div>
          
          </div>


          <div className='flex justify-around w-[80%] sm:w-[50%]'>

            <div className='compt relative tailwind p-5  h-[70px] w-[70px] sm:w-[80px] sm:h-[80px] border-[4px] border-[rgb(59,130,246)] shadow-[0px_0px_25px_rgba(59,130,246,1)] rounded-xl bg-gray-50  '>
                <Image
                    src={tailwind}
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
            </div>
            <div className='compt relative typescript p-5 h-[70px] w-[70px] sm:w-[80px] sm:h-[80px] border-[4px] border-[rgb(59,130,246)] shadow-[0px_0px_25px_rgba(59,130,246,1)] rounded-xl bg-gray-50  '>
                <Image
                    src={typescript}
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
            </div>

          </div>



          {/* <div className='p-5 hidden sm:block w-[70px] h-[70px] border-2 border-white rounded-xl bg-gray-50 opacity-50 '>
              <Image
                  src={css}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div> */}

          {/* <div className='p-5 hidden md:block  border-2 border-white rounded-xl bg-gray-50 opacity-30 w-[65px] h-[65px] '>
          <Image
                  src={liquid}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </div> */}
          
        </div>
        
        <div className='flex items-center w-full justify-around'>

        {/* <div className='p-5 border-2 border-white rounded-xl bg-gray-50 opacity-30 w-[90px] h-[90px] '>
              
              </div> */}

        {/* <div className='p-5 hidden sm:block border-2 border-white rounded-xl bg-gray-50 opacity-50 w-[65px] h-[65px] '>
        <Image
                  src={c}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </div> */}

        {/* <div className='p-5 hidden sm:block border-2 border-white rounded-xl bg-gray-50 opacity-70 w-[70px] h-[70px] '>
              <Image
                  src={express}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div> */}
        
          <div className='compt relative node p-5 h-[70px] w-[70px] sm:w-[80px] sm:h-[80px] border-[4px] border-[rgb(59,130,246)] shadow-[0px_0px_25px_rgba(59,130,246,1)] rounded-xl bg-gray-50  '>
              <Image
                  src={node}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div>
          <div className='compt relative postgres p-5 sm:w-[80px] sm:h-[80px] h-[70px] w-[70px] border-[4px] border-[rgb(59,130,246)] shadow-[0px_0px_25px_rgba(59,130,246,1)] rounded-xl bg-gray-50  '>
              <Image
                  src={postgres}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div>
          <div className='compt relative prisma p-5 sm:w-[80px] sm:h-[80px] h-[70px] w-[70px] border-[4px] border-[rgb(59,130,246)] shadow-[0px_0px_25px_rgba(59,130,246,1)] rounded-xl bg-gray-50  '>
              <Image
                  src={prisma}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div>
          {/* <div className='p-5 hidden sm:block w-[70px] h-[70px] border-2 border-white rounded-xl bg-gray-50 opacity-70 '>
              <Image
                  src={mongodb}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
          </div> */}
{/* 
          <div className='p-5 hidden sm:block border-2 border-white rounded-xl bg-gray-50 opacity-50 w-[65px] h-[65px] '>
          <Image
                  src={csharp}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </div> */}

              {/* <div className='p-5 border-2 border-white rounded-xl bg-gray-50 opacity-30 w-[90px] h-[90px] '>
              
              </div> */}
        
        
          
          
        </div>
        
        </div>
    );
}