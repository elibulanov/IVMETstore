import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'
import { motion } from "framer-motion"
import Background from '../components/background'
import About from '../components/about'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import Features from '../components/features'
import Reviews from '../components/reviews'
import Newsletter from '../components/newsletter'


const Home: NextPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  const transition = {
    delay: 0.8
  }

  useEffect(() => {
    if (inView) {
      animation.set({
        opacity: 0,
      })
      animation.start({
        opacity: 1,
        transition: {
          type: 'default', duration: 2,
        }
      });
      if (!inView) {
        animation.start({ x: 0 })
      }
    }
    console.log("use effect hook, inView = ", inView);
  }, [inView]);

  return (
    <>
      <div className=''>
        <div className="bg-header">
          <Head>
            <title>IVMET</title>
            <meta name="description" content="IVMET brands" />
            <link rel="icon" href="/favicon.ico" />
            <script defer data-domain="ivmet-store.vercel.app" src="https://plausible.io/js/plausible.js"></script>
          </Head>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Features />
        
        {/* <Newsletter /> */}
        <Footer />
      </div>


    </>


  )
}

export default Home
