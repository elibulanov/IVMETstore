import { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import turquoise from '../images/products/blueDouble.png'
import splash from '../images/splash.jpg'
import images from './imagesHero'

const Hero: NextPage = () =>

<header className="">


<div className="container flex flex-col px-6 py-20 mx-auto space-y-6 md:h-128 md:py-40 sm:py-10 md:flex-row md:items-center md:space-x-6">
    
	<div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
        <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">

        </div>

        <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-5xl pt-10 pb-5 font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">Meet Quality and Affordability.</h1>
            <p className="mt-4 text-black-600 ">IVMET is a 100% family owned business that designs and creates
quality home and office goods from our home to yours. </p>
            <div className="mt-6">
				<a href="https://www.amazon.com/stores/IVMET/page/71BFFB9B-D8C8-47A6-9EB7-D125400B28BB?ref_=ast_bln">
				<button className="p-2 pl-5 pr-5 bg-yellow-500 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300">Buy Now</button>
				</a>
			
            </div>
        </div>
    </div>

    <div className="flex items-center justify-center w-full h-96 md:w-1/2">
	{/* <motion.div className="carousel">
					<motion.div className="inner-carousel">
						{images.map((image, i) => {
							return (
								<motion.div className="item"
									initial={{
										opacity: 0,
										translateX: i % 2 === 0 ? -50 : 50,
										translateY: -50,

									}}
									animate={{ opacity: 1, translateX: 0, translateY: 0 }}
									transition={{ duration: 0.9, delay: i * 0.5 }}
								>
									<Image src={image} />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div> */}
    </div>
</div>
</header>






export default Hero;