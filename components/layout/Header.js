'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'

import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  const pathname = usePathname();
  const [toggle, setBar] = useState(false)

  const handleBar = () => {
    setBar(!toggle)
  }
  const logo = (
    <svg className=' w-24 h-7 max-sm:w-20 max-sm:h-7' viewBox="0 0 111 28"  fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="fill-current dark:text-neutral-100 text-neutral-800 group-hover:text-indigo-400 transition duration-500" d="M33.5418 17.1137V19.5369H2.54516V25.4517H40V27.861H0.135093V17.1137H33.5418ZM39.8641 0.139021V2.56222H2.40929V7.52979H33.4074V9.93985H0V0.139021H39.8641Z"/>
      <path className="fill-current dark:text-neutral-100 text-neutral-800 group-hover:text-indigo-400 transition duration-500" d="M73.4168 0.245764V25.3367H111V27.7543H71V0.245764H73.4168Z"/>
    </svg>
  )
  return (
    <div className='flex justify-around items-center py-16 z-10'>
      <Link className='group' href="/">{logo}</Link> 
      <div className='group flex gap-8 items-center max-lg:hidden'>
        <Link className={`link-underline link-underline-black ${pathname === "/about" ? "hidden" : "flex"}`} href="/about">About</Link>
        <Link className={`link-underline link-underline-black ${pathname === "/projects" ? "hidden" : "flex"}`} href="/projects">Projects</Link>
        <Link className={`link-underline link-underline-black ${pathname === "/contact" ? "hidden" : "flex"}`} href="/contact">Contact</Link>
        <ThemeSwitch/>
      </div>
      <div className='hidden gap-8 items-center max-lg:flex'>
        <button onClick={handleBar} className='text-3xl cursor-pointer hover:text-indigo-400 transition duration-500'><HiBars3/></button>
        <ThemeSwitch/>
      </div>
      <div className={` fixed top-32 group flex-col hidden gap-8 items-center max-lg:flex ${toggle === true ? "top-0": " top-full"}`}>
        <Link className={`link-underline link-underline-black ${pathname === "/about" ? "border-b dark:border-neutral-100 border-neutral-800" : "none"}`} href="/about">About</Link>
        <Link className={`link-underline link-underline-black ${pathname === "/projects" ? "border-b dark:border-neutral-100 border-neutral-800" : "none"}`} href="/projects">Projects</Link>
        <Link className={`link-underline link-underline-black ${pathname === "/contact" ? "border-b dark:border-neutral-100 border-neutral-800" : "none"}`} href="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header