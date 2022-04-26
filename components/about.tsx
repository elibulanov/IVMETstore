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
      <section className="container mx-auto lg:px-20">
        <div className="lg:py-16 lg:px-16 pt-20">
          <div className="container m-auto  text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-60">

              <div className="md:7/12 lg:w-6/12 text-center">
                <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">What is IVMET?</h1>

                <p className="mt-4 text-gray-600 text-left"> We are a family business that creates durable, yet affordable lifestyle prodcuts. </p>
              </div>
              <div className="md:5/12 lg:w-5/12">
                <Image src={bag} alt="image" loading="lazy" width="" height="" />
              </div>
            </div>
          </div>

          <div className="container m-auto px-6 pt-40 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-60">
              <div className="md:5/12 lg:w-5/12 ">
                <Image src={city} alt="image" loading="lazy" width="" height="" />
              </div>
              <div className="md:7/12 lg:w-6/12 text-center">
                <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">Our Mission</h1>

                <p className="mt-4 text-gray-600 text-left"> We are a family business that creates durable, yet affordable lifestyle products. </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>

  )
}


