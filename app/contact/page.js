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
     {/* <ContactForm/> */}
     <form action="https://api.web3forms.com/submit" className="flex flex-col gap-5 pr-[40%] max-xl:pr-[30%] max-lg:pr-[20%] max-md:pr-[10%] max-sm:pr-0" method="POST">
        <input type="hidden" name="access_key" value="4ca25845-4848-43d1-9405-1a36b3cbc2de"/>
        <input style={{display: "none"}} name="bot-field" />
        <input type="text" name="name" id="name" placeholder="Name" required/>
        <input type="email" name="email" id="email" placeholder="Email" required/>
        <textarea name="message" rows="5" placeholder="Message" required/>
        <div class="h-captcha" data-captcha="true"></div>
        <button className="bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 w-fit text-sm py-4 px-3 rounded-md hover:bg-purple-400 dark:hover:bg-purple-400 transition duration-500" type="submit">Send Message</button>
      </form>
      <Link className='group flex w-fit justify-center items-center gap-3' href="/">
        <div className='group-hover:bg-[length:100%_2px] link-underline link-underline-black border-b border-neutral-800 dark:border-neutral-100'>Back to home</div>
        <div className='mt-0.5 text-xl animate-arrow'><IoIosArrowRoundForward/></div>
      </Link>
    </div>
  )
}

export default Contact
