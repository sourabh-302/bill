import React from 'react'
import Navbar from './navbar'
import girl from "../assets/image/girl.png"
import dots from "../assets/image/dots.png"
import bg from "../assets/image/bg.png"
import Input from './common/input'
import Logos from './logos'
import SwitchingEnergy from './SwitchingEnergy '
import Simplestep from './Simplestep'
 



function Home() {
  return (
    <section  >
      <div className=" bg-cover bg-center min-h-screen min-[991.98px]:max-h-202.5" style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className='max-w-285 mx-auto  px-4'>
          <div className='flex flex-row  pt-30.5 max-[991.98px]:flex-col-reverse '>
            <div className='w-1/2 max-[991.98px]:w-full max-[991.98px]:flex max-[991.98px]:flex-col max-[991.98px]:text-center     max-[991.98px]:items-center '>
              <h1 className='min-[991.98px]:max-w-153 max-[991.98px]:w-full max-[991.98px]:pt-15 max-md:pt-10 text-white pb-4  font-bold text-[64px]  max-md:text-[50px]   leading-[110%] capitalize tracking-normal'>Easily Compare Energy, Gas, and Internet Plans</h1>
              <p className='min-[991.98px]:max-w-126.5  max-[991.98px]:w-full  text-white/90 pb-10.5 font-normal text-[16px] max-sm:text-[12px] leading-[150%] tracking-normal'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
              <Input
                placeholder="Start typing your address"
                buttonText="Compare"
              />

              <p className='pt-64 max-[991.98px]:pt-10 max-[1040px]:pt-50 max-[991.98px]:pb-9   max-w-175 font-normal text-[38px] leading-[110%] tracking-normal capitalize text-[#003459] max-[991.98px]:text-white'>More than <span className='text-[#00A8E8]'>80,000+</span>  companies trust bill central </p>
            </div>
            <div className=' w-1/2  max-[991.98px]:w-full  px-3 relative'>
              <img src={girl} alt="image" className=' relative z-1 block mx-auto ' />
              <img src={dots} alt="image" className='absolute -top-14.25 right-0 min-[800px]:right-[12%] lg:right-0 xl:right-[-11%]' />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-285  mx-auto px-4 min-[991.98px]:mt-40.5    '>
        <Logos />
      </div>
     
    </section>
  )
}

export default Home