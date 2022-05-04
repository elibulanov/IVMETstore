import { NextPage } from "next";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from 'next/link';
import turquoise from '../images/products/turquoise.jpg'
import lunchbagMini from '../images/lunchbag.jpg'
import lunchbag from '../images/products/lunchbagSet.jpg'
const Products: NextPage = () => 

<>
<Navbar/>

<div className="bg-white">
            <div className="grid mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <div className="grid lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    <a href="" className="group">
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <Link href="/aqua">
                                <Image src={turquoise} layout="fill" alt="" className="w-full h-full object-center object-cover group-hover:opacity-75"></Image>
                            </Link>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">
                            AQUA Bottles
                        </h3>
                        
                    </a>
                    <a href="#" className="group">
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <Link href="/lunchbag">
                                <Image src={lunchbag} layout="fill" alt="" className="w-full h-full object-center object-cover group-hover:opacity-75"></Image>
                            </Link>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">
                            Lunchbag Kit
                        </h3>
                       
                    </a>
                    <a href="#" className="group">
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <Link href="/mini">
                                <Image src={lunchbagMini} layout="fill" alt="" className="w-full h-full object-center object-cover group-hover:opacity-75"></Image>
                            </Link>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">
                            Lunchbag Mini
                        </h3>
                        
                    </a>
                </div>
            </div>
        </div>

</>



export default Products