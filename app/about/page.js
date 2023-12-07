import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import profile from "@/public/img/profile.jpg"

const About = () => {
  return (
    <div className='flex flex-col gap-14 px-[20%] pt-20 max-sm:px-[5%]'>
        <h1>About me</h1>
        <div className='flex gap-14 max-lg:flex-col'>
          <Image
            src={profile}
            alt='profile'
            width={800}
            height={800}
            className=" w-80 h-80 object-cover rounded-lg pointer-events-none"/>
            <div className='flex flex-col gap-5 justify-center leading-relaxed'>
              <p>A passionate and detail-oriented Frontend Developer with knowledge in HTML and CSS, as well as third-party libraries such as React.js, Next.js, Gatsby.js and Tailwind CSS.</p>
              <p>{"I approach challenges with a problem-solving mindset, finding elegant and effective solutions. Whether it's optimizing performance, improving user experience, or troubleshooting issues, I enjoy the process of refining and enhancing digital products."}</p>
            </div>
        </div>
        <div className='flex flex-col gap-8'>
          <h2>skills</h2>
          <div className='flex flex-wrap gap-x-20 gap-y-5'>
            <h3>React.js</h3>
            <h3>Next.js</h3>
            <h3>JavaScript</h3>
            <h3>HTML | CSS</h3>
            <h3>Tailwind CSS</h3>
            <h3>Headless CMS</h3>
            <h3>Git</h3>
            <h3>Figma</h3>
          </div>
        </div>
        <Link className='group flex w-fit justify-center items-center gap-3' href="/projects">
        <div className='group-hover:bg-[length:100%_2px] link-underline link-underline-black border-b border-neutral-800 dark:border-neutral-100'>Lets explore my projects</div>
        <div className='mt-0.5 text-xl animate-arrow'><IoIosArrowRoundForward/></div>
      </Link>
    </div>
  )
}

export default About