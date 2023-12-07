import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex gap-8 px-[20%] py-20 max-sm:px-[5%] text-2xl'>
      <a href="https://www.github.com" aria-label="Github link" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition duration-500 cursor-pointer'><FaGithub/></a>
      <a href="https://www.linkedin.com" aria-label="Linkedin link" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition duration-500 cursor-pointer'><FaLinkedin/></a>
      <a href="https://www.instagram.com" aria-label="Instagram link" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition duration-500 cursor-pointer'><FaInstagram/></a>
      <a href="https://www.facebook.com" aria-label="Facebook link" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition duration-500 cursor-pointer'><FaFacebook/></a>
      <a href="https://twitter.com/" aria-label="XTwitter link" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition duration-500 cursor-pointer'><FaXTwitter/></a>
    </div>
  )
}

export default Footer