import { NextPage } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const Products: NextPage = () =>

    <>
        <Navbar />
        <div className="bg-white min-h-screen">
            <h2 className=" border-b-2 text-2xl px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                About Us
            </h2>
            <div className="py-16">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-60">
                        <div className="md:5/12 lg:w-5/12">
                            <img src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80" alt="image" loading="lazy" width="" height=""/>
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">IVMET is a true family business focusing on making products that really work.</h2>
                            <p className="mt-6 text-gray-600">We know what its like to shop big name brands and get products that do not meet that promise.</p>
                            <p className="mt-4 text-gray-600"> At IVMET we meet quality and affordability, selling only products we ourselves use. As a growing buisiness, 
                            we want to focus on improving with every iteration of our product. We listen to our customers and want to only provide the best. Whether its for the home or office, a gift for a loved one or for your employees, we thank you for choosing us. </p>
                        </div>
                    </div>
                </div>

                <div className="container m-auto px-6 pt-20 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-60">
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Question for us? Get in touch </h2>
                            <p className="mt-7 text-gray-600">IVMET BRANDS LLC</p>
                            <p className="mt-7 text-gray-600">Address: 19215 SE 34TH ST #106/132 Camas, WA 98607 </p>
                            <p className="mt-7 text-gray-600">Phone: 360-809-3625 </p>
                            <p className="mt-7 text-gray-600">service@ivmet.com  </p>
                             
                        </div>
                        <div className="items-center">
                        <img src="/email.svg" alt="Envelope with a newsletter" role="img" className="" width={300}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </>



export default Products