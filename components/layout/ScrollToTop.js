"use client"
import { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)


    useEffect(() => {
      const toggleVisibility = () => { window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)}
      window.addEventListener("scroll", toggleVisibility)
      return () => {window.removeEventListener("scroll", toggleVisibility)}
    }, [])
  
    const scrollToTop = () => {
      isVisible &&
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
    }
  
    return (
        <div className='fixed bottom-4 right-4 z-10'>
<           button aria-label='to top button' className={`bg-indigo-400 p-2 rounded-xl text-neutral-100 hover:bg-opacity-80 hover:text-opacity-80 transition duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} onClick={scrollToTop}>
                <AiOutlineArrowUp className=' text-2xl max-sm:text-xl'/>
            </button>
        </div>
      
    )
}

export default ScrollToTop