import './globals.css'
import LayoutComponent from '../components/layout/LayoutComponent'

export const metadata = {
  metadataBase: new URL("https://techins-task.netlify.app/"),
  title: {
    default: "Elissaios Loutos",
    template: `%s | Elissaios Loutos`
  },
  description: 'A passionate and creative Junior Front-End Developer with a love for crafting clean, user-friendly, and intuitive digital experiences. My journey in web development began with a strong curiosity and a commitment to turning ideas into interactive, responsive, and visually appealing websites.',
}

export default function RootLayout({ children }) {
  return (
    <LayoutComponent>
      {children}
    </LayoutComponent>
  )
}
