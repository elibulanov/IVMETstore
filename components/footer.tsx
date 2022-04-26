import { NextPage } from "next";
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer: NextPage = () => 


<section className="w-full bg-white">
    <div className="px-8 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
            <div className="col-span-3">
                <a href="#_" className="text-xl font-black leading-none text-gray-900 select-none logo">ivmet</a>
                <p className="my-4 text-xs leading-normal text-gray-500">
                    Beautifully hand-crafted products from our home to yours.
                </p>
            </div>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Product</p>
                <a href="#" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Features</a>


                <a href="#" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">FAQs</a>
                <a href="#" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Pricing</a>
            </nav>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">About</p>
                <a href="#" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Our Story</a>
                <a href="#" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Company</a>

                <a href="#" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Blog</a>
            </nav>
            <nav className="col-span-2 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Contact</p>
                <a href="#" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Advertising</a>
                <a href="#" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Business</a>

            </nav>
            <div className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start ">
                <FaInstagram/>
                <FaFacebook/>
                <FaPinterest/>
                <FaTwitter/>
            </div>
        </div>
        <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
            <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">© Copyright 2021 IVMET. All Rights Reserved.</p>
            <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
                <a href="#_" className="text-sm text-gray-600 transition hover:text-primary">Terms</a>
                <a href="#_" className="text-sm text-gray-600 transition hover:text-primary">Privacy</a>
            </div>
        </div>
    </div>
</section>




export default Footer;