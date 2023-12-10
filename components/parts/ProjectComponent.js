"use client"
import React, {useState} from 'react'
import Image from 'next/image'

const ProjectComponent = ({title, image, tech, links, shortD, description, handleMoreInfo }) => {
  function handleClick() {
    handleMoreInfo(title, image, tech, links, shortD, description);
  }
  return (
    <div onClick={handleClick} className='group relative mb-4 w-full max-h-[500px] overflow-hidden rounded-2xl cursor-pointer '>
      {image.endsWith('.gif') ? 
        <Image src={image} 
        alt={title} 
        width={1280}
        height={720}
        unoptimized={true}
        className="object-cover rounded-2xl group-hover:scale-125 transition duration-500"/>
      : 
        <Image src={image} 
          alt={title} 
          width={1280}
          height={720}
          className="object-cover rounded-2xl group-hover:scale-125 transition duration-500"/>
      }
      <div className='absolute flex flex-col gap-3 p-8 bg-g h-full top-0 justify-end bg-gradient-to-t from-neutral-800 opacity-0 group-hover:opacity-100 transition duration-500 max-lg:opacity-100'>
        <h3 className=' text-neutral-100 text-lg font-bold'>{title}</h3>
        <p className='text-neutral-100'>{shortD}</p>
        <div className='flex flex-wrap gap-3'>
          {tech.map((data) => 
            <p className='bg-neutral-100 dark:text-neutral-800 text-neutral-800 px-2 rounded-md' key={data.tech}>{data.tech}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent