import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import getProjectsMetadata from '@/lib/getProjectsMetadata';
import ProjectApp from '@/components/parts/ProjectApp';

export const metadata = {
  title: 'Projects',
}

const Projects = () => {
  const data = getProjectsMetadata()
  return (
    <div className='flex flex-col gap-14 px-[20%] pt-20 max-sm:px-[5%]'>
      <h1>projects</h1>
      <ProjectApp data={data}/>
      <Link className='group flex w-fit justify-center items-center gap-3' href="/contact">
        <div className='group-hover:bg-[length:100%_2px] link-underline link-underline-black border-b border-neutral-800 dark:border-neutral-100'>Get in touch</div>
        <div className='mt-0.5 text-xl animate-arrow'><IoIosArrowRoundForward/></div>
      </Link>
    </div>
    
  )
}

export default Projects