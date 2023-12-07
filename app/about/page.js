import Markdown from "markdown-to-jsx";
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import getAboutMetadata from '@/lib/getAboutMetadata';

const About = () => {
  const data = getAboutMetadata()
  return (
    <div className='flex flex-col gap-14 px-[20%] pt-20 max-sm:px-[5%]'>
        <h1>About me</h1>
        <div className='flex gap-14 max-lg:flex-col'>
          <Image
            src={data.image}
            alt='profile'
            width={800}
            height={800}
            className=" w-80 h-80 object-cover rounded-lg pointer-events-none"/>
            <article className="prose prose-p:leading-loose leading-loose prose-p:tracking-wider max-w-none text-sm font-light prose-neutral dark:prose-invert prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-opacity-70 hover:prose-a:underline">
              <Markdown>{data.aboutD}</Markdown>
            </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h2>skills</h2>
          <div className='flex flex-wrap gap-x-20 gap-y-5'>
            {data.skills.map((data) =>
              <h3 key={data.skill}>{data.skill}</h3>
            )}
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