"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { VscColorMode } from "react-icons/vsc";


const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex gap-3 text-2xl cursor-pointer">
      {theme === "dark"
      ? <div onClick={() => setTheme("light")} className=" self-center hover:text-indigo-400 transition duration-500"><VscColorMode/></div>
      : <div onClick={() => setTheme("dark")} className="self-center hover:text-indigo-400 transition duration-500"><VscColorMode/></div> 
      }
    </div>
  )
}

export default ThemeSwitch