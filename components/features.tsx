import React from 'react'
import lunchbag from '../images/lunchbag.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import bottles from '../images/bottles.png'
import { GiWaterRecycling } from "react-icons/gi";
import { Gi3DHammer } from 'react-icons/gi'
import { GiCheckMark } from 'react-icons/gi'
import {ImLeaf} from 'react-icons/im'

export default function Features() {
  return (

    <section id="testimonials">
    
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
   
        <h2 className="text-4xl font-bold text-center">
          What's Different About IVMET?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
         <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <div className='vectorIcon'>
            <GiCheckMark/>
            </div>
            <p className="text-sm text-darkGrayishBlue">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam aut ut error labore. Voluptas alias, obcaecati vero eum aliquid
               eius eaque porro laboriosam earum tempora soluta minus dolore dicta."
            </p>
          </div>
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <div className='vectorIcon'>
            <GiWaterRecycling/>
            </div>
            <p className="text-sm text-darkGrayishBlue">
              “Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam aut ut error labore. Voluptas alias, obcaecati vero eum aliquid
               eius eaque porro laboriosam earum tempora soluta minus dolore dicta.”
            </p>
          </div>
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <div className='vectorIcon'>
            <ImLeaf/>
            </div>
            <p className="text-sm text-darkGrayishBlue">
              “Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam aut ut error labore. Voluptas alias, obcaecati vero eum aliquid
               eius eaque porro laboriosam earum tempora soluta minus dolore dicta.”
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
