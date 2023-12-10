import './globals.css'
import Providers from "@/lib/providers"
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'

export const metadata = {
  metadataBase: new URL("https://elissaios-loutos.netlify.app/"),
  title: {
    default: "Elissaios Loutos",
    template: `%s | Elissaios Loutos`
  },
  description: 'A passionate and creative Junior Front-End Developer with a love for crafting clean, user-friendly, and intuitive digital experiences. My journey in web development began with a strong curiosity and a commitment to turning ideas into interactive, responsive, and visually appealing websites.',
}

export default function RootLayout({ children }) {
  return (
     <html lang="en">
        <body className='dark:bg-neutral-800 dark:text-neutral-100 dark:bg-dark-bg-image dark:border-neutral-100 bg-neutral-100 text-neutral-800 bg-fixed bg-bg-image w-full bg-cover'>
          <Providers>
            <ScrollToTop/>
            <Header/>
            {children}
            <Footer/>
          </Providers>
        </body>
      </html>
  )
}
