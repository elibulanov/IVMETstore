import { NextPage } from "next"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import images from '../components/imageSlide'
import bottle from '../images/bottles/turquoise.png'


  

import Link from 'next/link';

const Aqua: NextPage = () =>
    <>
        <Navbar />
        <div className="container flex flex-col lg:pl-52 lg:pr-10 py-4 mx-auto space-y-6 md:h-128 md:py-44 md:flex-row md:items-center md:space-x-6">
            <div className="flex items-center justify-center w-full h-96 md:w-1/2">
                <div className="object-cover  max-w-2xl rounded-md">
                    <div>
                    <Carousel showArrows={true} showThumbs={true} infiniteLoop={true} swipeable={true}>
                        {
                            images.map((image, index) => (
                                <div key={index}>
                                    <Image src={image} />
                                </div>
                            ))
                        }
                    </Carousel>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
                <div className="max-w-lg md:mx-12 md:order-2">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">ON SALE</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">AQUA v2</h1>
                    <span className="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-gray-600 ml-3">20 Reviews</span>
                    </span>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div className="flex">
                            <span className="mr-3">Color</span>
                            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        </div>

                    </div>
                    <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">$45.99</span>
                        <button className="flex mr-auto ml-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>
                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>



export default Aqua