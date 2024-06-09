"use client";
import { motion } from "framer-motion";
import React from 'react'
import About from "@/components/05_interfaz_about/About";
import NavBar from "@/components/NavBar";

function page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <NavBar />
        <About />
      </motion.div>
    </>
  )
}

export default page