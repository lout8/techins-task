"use client"
import React, { useState } from 'react'
import Providers from "../../lib/providers"
import Header from "./Header"
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const LayoutComponent = ({children}) => {
    const [toggle, setBar] = useState(false)
    return (
        <html lang="en">
            <body className={`dark:bg-neutral-800 dark:text-neutral-100 dark:bg-dark-bg-image dark:border-neutral-100 bg-neutral-100 text-neutral-800 bg-fixed bg-bg-image w-full bg-cover ${toggle === true ? 'overflow-hidden' : 'overflow-scroll'}`}>
                <Providers>
                    <ScrollToTop/>
                    <Header toggle={toggle} setBar={setBar}/>
                    {children}
                    <Footer/>
                </Providers>
            </body>
        </html>
    )
}

export default LayoutComponent