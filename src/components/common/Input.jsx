// import React from 'react'
// import Button from './button'

// function Input() {
//   return (
//     <div className="relative w-fit">
//       <input
//         placeholder={`${props.placeholder}`}
//         className="w-full border border-black/70 bg-white
//                    rounded-tr-[100px] rounded-br-[100px] rounded-bl-[40px]
//                     pl-5 py-5 outline-none pr-67.5"
//       />

//       <div className="absolute  right-1 top-1/2 -translate-y-1/2  pr-2  ">
//         <Button text="Compare" className="font-bold text-[16px] leading-[100%] text-white  tracking-normal capitalize hover:bg-[#11688b] bg-[#00A8E8]" />
//       </div>
//     </div>
//   )
// }

// export default Input

import React from 'react'
import Button from './Button'

function Input({ placeholder, buttonText }) {
  return (
    <div className="relative w-fit ">
      <input 
      
        placeholder={placeholder}
        className="w-full border border-black/70 bg-white
                   rounded-tr-[100px] rounded-br-[100px] rounded-bl-[40px]
                   pl-5 py-5 outline-none pr-67.5 max-[991.98px]:pr-50 max-[442.98px]:pr-42.5 max-[380.98px]:pr-37.5"
      />

      <div className="absolute right-1 top-1/2 -translate-y-1/2 pr-2">
        <Button
          text={buttonText}
          className="font-bold text-[16px] leading-[100%] text-white tracking-normal capitalize hover:bg-[#11688b] bg-[#00A8E8] max-[991.98px]:px-5 max-[442.98px]:px-3  "
        />
      </div>
    </div>
  )
}

export default Input

 