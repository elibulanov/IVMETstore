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
              Our products come with a lifetime warranty. If our products dont meet your needs, it may be returned to Amazon within 30 days, beyond 30 days simply email us at "service@ivmet.com" and we will be glad to help you.
            </p>
          </div>
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <div className='vectorIcon'>
            <GiWaterRecycling/>
            </div>
            <p className="text-sm text-darkGrayishBlue">
              Affordable, Sustainable and Reusable. Our goal is to create product that reduce waste. A good Stainless-Steel insulated water bottle sure holds temperature better then a plastic one.
            </p>
          </div>
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <div className='vectorIcon'>
            <ImLeaf/>
            </div>
            <p className="text-sm text-darkGrayishBlue">
              A growing company. We are 100% family owned, and we want to only create things we ourselves use. As a growing company, we want to iterate on every product realeased and improve always. 
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
