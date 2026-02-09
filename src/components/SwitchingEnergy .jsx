import React from 'react'
import combo from "../assets/image/combo.png"
import Button from './common/Button'
function SwitchingEnergy () {
  return (
<section>
     <div className='max-w-285 mx-auto px-3  pt-[165px]'>
        <div className='flex flex-wrap -mx-3 px-3 justify-between'>
          <div className='w-full lg:w-1/2  '>
            <img src={combo} alt="image" className='block mx-auto lg:mx-0' />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='flex flex-col  '>
              <p className='md:text-[48px] text-[40px] font-normal lg:max-w-102.25 w-full '><span className='font-semibold text-[#00171F]'>Switching Energy</span> Made Simple</p>
              <p className='font-normal text-base text-[#1A2E35]  lg:max-w-102.5 w-full mt-5 lg:mt-0 '>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
              <p className='text-[#003459] font-normal sm:text-3xl text-2xl mt-[38px] mb-[28px]'>Benefits of Comparing Energy Plans</p>

              <ul className='list-disc list-inside '>
                <li className='text-[#1A2E35] sm:text-base text-[14px] font-normal sm:ml-4 ml-2'>Save money by finding cheaper deals.</li>
                <li className='text-[#1A2E35] sm:text-base text-[14px] font-normal sm:ml-4 ml-2'>Get better customer service.</li>
                <li className='text-[#1A2E35] sm:text-base text-[14px] font-normal sm:ml-4 ml-2'>Explore greener, more sustainable energy options.</li>
              </ul>
              <Button text="Compare With Us" className="bg-[rgba(0,168,232,1)] max-w-[201px] text-white mt-[42px]" />
            </div>
          </div>
        </div>

      </div>
</section>
  )
}

export default SwitchingEnergy 