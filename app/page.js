import Markdown from "markdown-to-jsx";
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import getAboutMetadata from '@/lib/getAboutMetadata';


export default function Home() {
  const data = getAboutMetadata()
  return (
    <div className='flex flex-col gap-8 px-[20%] pt-20 max-sm:px-[5%]'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 select-none'>{"I'm Elissaios Loutos"}</h1>
      <article className="prose prose-p:leading-loose leading-loose prose-p:tracking-wider max-w-none text-sm font-light prose-neutral dark:prose-invert prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-opacity-70 hover:prose-a:underline">
        <Markdown>{data.homeD}</Markdown>
      </article>
      <Link className='group flex w-fit justify-center items-center gap-3' href="/about">
        <div className='group-hover:bg-[length:100%_2px] link-underline link-underline-black border-b border-neutral-800 dark:border-neutral-100'>More about me</div>
        <div className='mt-0.5 text-xl animate-arrow'><IoIosArrowRoundForward/></div>
      </Link>
    </div>
  )
}
