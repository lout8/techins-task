import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectComponent = (data) => {
  return (
    <div className='group relative mb-4 w-full max-h-[500px] overflow-hidden rounded-2xl cursor-pointer '>
          <Image src={data.image} 
            alt={data.ttile} 
            width={1280}
            height={720}
            className="object-cover rounded-2xl group-hover:scale-125 transition duration-500"/>
            <div className='absolute flex flex-col gap-3 p-8 bg-g h-full top-0 justify-end bg-gradient-to-t from-neutral-800 opacity-0 group-hover:opacity-100 transition duration-500'>
              <h3 className=' text-neutral-100 text-lg font-bold'>{data.title}</h3>
              <p className='text-neutral-100'>{data.shortD}</p>
              <div className='flex flex-wrap gap-3'>
                {data.tech.map((data) => 
                  <p className='bg-neutral-100 dark:text-neutral-800 text-neutral-800 px-2 rounded-md' key={data.tech}>{data.tech}</p>
                )}
              </div>
            </div>
    </div>
  )
}

export default ProjectComponent