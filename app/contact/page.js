import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import ContactForm from '@/components/parts/ContactForm';

export const metadata = {
  title: 'Contact',
}

const Contact = () => {

  return (
    <div className='flex flex-col gap-14 px-[20%] pt-20 max-sm:px-[5%]'>
      <h1>Contact</h1>
      <p>Whether you have a question or just want to say hi, I will try my best to get back to you! Direct email: <div className='font-semibold select-all'>e.loutos8@gmail.com</div></p>
     <ContactForm/>
      <Link className='group flex w-fit justify-center items-center gap-3' href="/">
        <div className='group-hover:bg-[length:100%_2px] link-underline link-underline-black border-b border-neutral-800 dark:border-neutral-100'>Back to home</div>
        <div className='mt-0.5 text-xl animate-arrow'><IoIosArrowRoundForward/></div>
      </Link>
    </div>
  )
}

export default Contact
