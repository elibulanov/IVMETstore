import React from 'react'
import lunchbag from '../images/lunchbag.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import bottles from '../images/bottles.png'

export default function Reviews() {
  return (

    <section id="testimonials">
    
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
   
        <h2 className="text-4xl font-bold text-center">
          Customers love it.
        </h2>
        <p className="text-center text-2xl font-bold ">
         #
        </p>
       
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
         
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <Image src={bottles} className="w-16 -mt-14" alt="" />
            
            <p className="text-sm text-darkGrayishBlue">
              #
            </p>
          </div>

    
          <div
            className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <Image src={bottles} className="w-16 -mt-14" alt="" />
            
            <p className="text-sm text-darkGrayishBlue">
              #
            </p>
          </div>

  
          <div
            className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <Image src={bottles} className="w-16 -mt-14" alt="" />
            
            <p className="text-sm text-darkGrayishBlue">
              #
            </p>
          </div>
        </div>
   
        <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a
          >
        </div>
      </div>
    </section>

  )
}
