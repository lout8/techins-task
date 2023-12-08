import React, {useEffect} from 'react'
import Image from 'next/image'
import Markdown from "markdown-to-jsx";
import { IoIosArrowRoundBack } from "react-icons/io";

const ProjectDetailsComponent = ({projectData, projectToggle, setProjectToggle}) => {
  const { title, image, tech, links, shortD, description } = projectData

  const handle = () => {
    setProjectToggle(false)
    const element = document.getElementById("detailsWindow")
    element.scrollTo({
      top: 0,
    })
  }
  return (
    <div className='relative'>
        <div onClick={handle} className={`fixed top-0 w-full h-screen dark:bg-neutral-800 bg-neutral-100 backdrop-blur-3xl transition duration-500 ${projectToggle === true ? 'right-0 opacity-95' : 'right-full opacity-0'}`}></div>
        <div id='detailsWindow' className={`fixed top-0 flex flex-col gap-5 h-screen w-[500px] p-8 max-sm:w-full dark:bg-neutral-900 bg-neutral-50 shadow-sm duration-500 overflow-scroll ${projectToggle === true ? 'right-0' : ' right-[-100%]'}`}>
          <div onClick={handle} className='text-2xl bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-800 text-neutral-100 w-fit p-1 rounded-md cursor-pointer dark:hover:bg-purple-400 hover:bg-purple-400 transition duration-500'><IoIosArrowRoundBack/></div>
          <h3 className='text-2xl'>{title}</h3>
          <p>{shortD}</p>
          <Image 
            src={image} 
            alt={title} 
            width={1280}
            height={720}
            className="object-cover max-h-80 rounded-2xl group-hover:scale-125 transition duration-500"/>
            <div>
              <h3 className='text-lg'>About</h3>
              <article className="prose  text-sm font-light prose-neutral dark:prose-invert prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-opacity-70 hover:prose-a:underline">
                  <Markdown>{description}</Markdown>
              </article>
            </div>
            <h3 className='text-lg'>Technologies</h3>
            <div className='flex flex-wrap gap-3'>
              {tech.map((data) => 
                <p className='dark:bg-neutral-100 bg-neutral-800 dark:text-neutral-800 text-neutral-100 px-2 rounded-md' key={data.tech}>{data.tech}</p>
              )}
            </div>
            <h3 className='text-lg'>Links</h3>
            <div className='flex flex-wrap gap-3'>
              {links.map((data) => 
              <div key={data.name}>
                <a href={data.link} aria-label="XTwitter link" target="_blank" rel="noopener noreferrer" className='dark:bg-neutral-100 bg-neutral-800 dark:text-neutral-800 text-neutral-100 px-2 rounded-md font-light tracking-wider text-sm' >{data.name}</a>
              </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default ProjectDetailsComponent