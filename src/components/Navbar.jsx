import React, { useState, useEffect } from "react"
import logo from "../assets/image/logo.png"
import Button from "./common/button"

function Navbar() {
  const [open, setOpen] = useState(false)

 
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  const navLinks = [
    "About",
    "How It Works",
    "Services",
    "Testimonials",
    "Why Us",
    "FAQ",
  ]

  return (
    <header className="w-full z-50 relative">
      <div className="max-w-285 mx-auto px-4 flex items-center justify-between pt-4 relative">
        
        <img src={logo} alt="logo" className="w-32 z-50 max-[551.98px]:w-25" />
 
        <nav className="hidden lg:flex gap-6 items-center z-50">
          {navLinks.map((item) => (
            <a
              key={item}
              className="text-white text-[16px] capitalize relative cursor-pointer
                         after:absolute after:left-0 after:-bottom-1
                         after:h-0.5 after:w-0 after:bg-white
                         after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>
 
        <div className="flex items-center gap-4 z-50">
        
          <Button
            text="Get Started"
            className="text-[#00171F] bg-white py-3 px-5 max-[991.98px]:px-3  
                       rounded-tr-[50px] rounded-br-[50px] rounded-bl-[40px]
                       font-bold text-[16px] capitalize hover:bg-[#1c97c8]"
          />

         
          <div
            className="flex flex-col gap-1 cursor-pointer lg:hidden z-50"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300
                          ${open ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300
                          ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300
                          ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </div>

        
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#003459] flex flex-col items-center justify-center gap-8
                      transition-transform duration-500 ease-in-out
                      ${open ? "translate-x-0" : "-translate-x-full"} lg:hidden z-40`}
        >
          {navLinks.map((item) => (
            <button
              key={item}
              className="text-white  text-2xl capitalize cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
