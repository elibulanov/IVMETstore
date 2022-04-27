import { NextPage } from "next"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import images from '../components/lunchbag';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Lunchbag: NextPage = () => 

<>
<Navbar/>
<div className="container flex flex-col lg:pl-52 lg:pr-10 py-4 mx-auto space-y-6 md:h-128 md:py-44 md:flex-row md:items-center md:space-x-6">
            <div className="flex items-center justify-center w-full h-96 md:w-1/2">
                <div className="object-cover  max-w-2xl rounded-md">
                    <Carousel showArrows={true} showThumbs={true} showIndicators={false} infiniteLoop={true} swipeable={true}>
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
            <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
                <div className="max-w-lg md:mx-12 md:order-2">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">ON SALE</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Lunchbag Kit</h1>
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
                        <span className="text-gray-600 ml-3">135 Reviews</span>
                    </span>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Lunch Bag set includes the most essential items for lunch on the go that allows to have healthy and quality meals wherever you are. </p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        

                    </div>
                    <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">$33.97</span>
                        <Link href="https://www.amazon.com/IVMET-3-Piece-Insulated-Stainless-Outdoors/dp/B086S46JWS">
                        <button className="flex mr-auto ml-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>
                        </Link>
                        
                        
                    </div>
                </div>
            </div>
        </div>

<Footer/>
</>



export default Lunchbag