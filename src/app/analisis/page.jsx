"use client";
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'
import { motion } from "framer-motion";
import Intro from '@/components/2.Calculo/Intro';
import GridView from '@/components/2.Calculo/GridView';
import BarNav from '@/components/2.Calculo/interface/BarNav';
import Resultados from '@/components/2.Calculo/interface/Resultados';
import FormulasGenerales from '@/components/2.Calculo/interface/FormulasGenerales';



function page() {
    return (
        <>
            <div className='grid'>
                <NavBar />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                
                <BarNav />
                <div className='flex max-sm:flex-col w-[85%] mx-auto '>
                    <GridView />
                    <Resultados />
                    
                </div>

                <Footer />
            </motion.div>

        </>
    )
}

export default page