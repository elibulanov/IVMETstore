import React from 'react'
import bottle from '../images/holdingBottle.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import lunchbag from '../images/products/together.jpg'
import bag from '../images/products/bag2.jpg'
import city from '../images/products/city.jpg'


export default function About() {
  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container-about max-w-[70%] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:pl-6 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">What is IVMET?

            </h1>
            <p className="mb-8 leading-relaxed">We are a family business that creates durable, yet affordable lifestyle prodcuts.</p>

          </div>
          <div className="">
            <Image className="object-cover object-center rounded" alt="hero" src={bag}  />
          </div>
        </div>

        <div className="container-about max-w-[70%] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="">
            <Image className="object-cover object-center rounded" alt="hero" src={city} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:pl-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">Our Mission

            </h1>
            <p className="mb-8 leading-relaxed">To bring you products that are quality, from design to durablility, we strive to only sell items that really work, not just look good.</p>

          </div>
         
        </div>
        
      </section>
    </>

  )
}
