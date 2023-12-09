"use client"
import {useState} from 'react'
import { useRouter } from 'next/navigation'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
}

const ContactForm = () => {
    const router = useRouter()
    //Forms
    let timer;
    const[start, setStart] = useState(false)
    const[sent, setSent] = useState(false)
    const THIS_PAGE = "/success"
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        message: "", 
    })
    const [statusText, setStatusText] = useState("")
    const handleChange = e => {
        const key = e.target.name
        const updatedFormValue = e.target.value
        const newFormData = {...formData, [key]: updatedFormValue}
        setFormData(newFormData)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const initialState = {
        name: "", 
        email: "",
        message: "", 
        }
        
        const form = e.target

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            // body: new URLSearchParams({
            //     "form-name": form.getAttribute('name'),
            //     ...formData,
            // }).toString(),
            body: encode({
                "form-name": form.getAttribute("name"),
                ...formData,
              }),
        }).then(() => {
            alert("Success!")
            setFormData(initialState)
            router.push(THIS_PAGE)
        }
        //     response => {
        //     clearTimeout(timer)
        //     if (response.ok){
        //     setFormData(initialState)
        //     setStatusText("Σας ευχαριστούμε για το μύνημα σας.")
        //     runTimer()
        //     setSent(true)
        //     setStart(true)
        //     }
        //     else{
        //     setStatusText("Σφάλμα: δοκιμάστε ξανά.") 
        //     runTimer()
        //     setSent(false) 
        //     setStart(true)
        //     } 
        
        // }
            ).catch((error) => console.log(`Error:${error}`))
    }

    const runTimer = () =>{
        timer = setTimeout(() => {
        setStatusText("")
        setSent(false)
        setStart(false)
        }, 10*1000)
    }
        
    return (
        <form name='contact' className='flex flex-col gap-5 pr-[40%] max-xl:pr-[30%] max-lg:pr-[20%] max-md:pr-[10%] max-sm:pr-0' method="POST"  onSubmit={e => handleSubmit(e)} action={THIS_PAGE} data-netlify="true" netlify-honeypot="bot-field">
            {/* <p start={start} sent={sent} className={`${start === true ? 'flex overflow-visible' : 'hidden'} ${sent === true ? 'text-green-500' : 'text-red-500'}`}>{statusText}</p> */}
            <input type="hidden" name="form-name" value="contact"/>
            <input style={{display: "none"}} name="bot-field" />
            <input type="text" name="name" id="name" placeholder="Name" value={formData.name} onChange={e => handleChange(e)} required/>
            <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={e => handleChange(e)} required/>
            <textarea name="message" rows="5" placeholder="Message" value={formData.message} onChange={e => handleChange(e)} required/>
            <button className='bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 w-fit text-sm py-4 px-3 rounded-md hover:bg-purple-400 dark:hover:bg-purple-400 transition duration-500' type='submit'>Send Message</button>
        </form>
    )
}
// const ContactForm = () => {
//     return(
//         <form name='contact' className='flex flex-col gap-5 pr-[40%] max-xl:pr-[30%] max-lg:pr-[20%] max-md:pr-[10%] max-sm:pr-0' method="POST" data-netlify="true" >
//             <input type="hidden" name="form-name" value="contact"/>
//             {/* <input style={{display: "none"}} name="bot-field" /> */}
//             <input  type="text" name="name" id="name" placeholder="Name" required/>
//             <input type="email" name="email" id="email" placeholder="Email" required/>
//             <textarea name="message" rows="5" placeholder="Message" required/>
//             <button className='bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 w-fit text-sm py-4 px-3 rounded-md hover:bg-purple-400 dark:hover:bg-purple-400 transition duration-500' type='submit'>Send Message</button>
//         </form>
//     )
// }


export default ContactForm