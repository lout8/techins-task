"use client"
import {useState} from 'react'

const ContactForm = () => {

    let timer;
    const[start, setStart] = useState(false)
    const[sent, setSent] = useState(false)
    const [result, setResult] = useState("");
    const [statusText, setStatusText] = useState()

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "4ca25845-4848-43d1-9405-1a36b3cbc2de");

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        }).then((res) => res.json());

        if (res.success) {
            setStatusText(<p className='dark:text-green-500 text-green-500'>Σας ευχαριστούμε για το μύνημα σας.</p>)
            runTimer()
            setSent(true)
            setStart(true)
        } else {
            setStatusText(<p className='dark:text-red-500 text-red-500'>Σφάλμα: δοκιμάστε ξανά.</p>) 
            runTimer()
            setSent(false) 
            setStart(true)
        }
    }
    const runTimer = () =>{
            timer = setTimeout(() => {
            setStatusText("")
            setSent(false)
            setStart(false)
            }, 10*1000)
        }
    return (
        <form className="flex flex-col gap-5 pr-[40%] max-xl:pr-[30%] max-lg:pr-[20%] max-md:pr-[10%] max-sm:pr-0" onSubmit={onSubmit} method="POST">
            <input type="hidden" name="access_key" value="4ca25845-4848-43d1-9405-1a36b3cbc2de"/>
            <p className={`transition duration-500 ${start === true ? 'flex overflow-visible opacity-100' : 'hidden opacity-0'}`}>{statusText}</p>
            <input type="text" name="name" id="name" placeholder="Name" required/>
            <input type="email" name="email" id="email" placeholder="Email" required/>
            <textarea name="message" rows="5" placeholder="Message" required/>
            <button className="bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 w-fit text-sm py-4 px-3 rounded-md hover:bg-purple-400 dark:hover:bg-purple-400 transition duration-500" type="submit">Send Message</button>
        </form>
    );
}

export default ContactForm