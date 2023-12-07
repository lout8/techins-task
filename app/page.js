import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Home() {
  return (
    <div className='flex flex-col gap-8 px-[20%] pt-20 max-sm:px-[5%]'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 select-none'>I'm Elissaios Loutos</h1>
      <p className=' leading-loose'>A passionate and creative Junior Front-End Developer with a love for crafting clean, user-friendly, and intuitive digital experiences. My journey in web development began with a strong curiosity and a commitment to turning ideas into interactive, responsive, and visually appealing websites.</p>
      <Link className='group flex w-fit justify-center items-center gap-3' href="/about">
        <div className='group-hover:bg-[length:100%_2px] link-underline link-underline-black border-b border-neutral-800 dark:border-neutral-100'>More about me</div>
        <div className='mt-0.5 text-xl animate-arrow'><IoIosArrowRoundForward/></div>
      </Link>
    </div>
  )
}
