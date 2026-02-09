import React from 'react'

function Button(props) {
  return (
    <button
      className={`
        px-7 py-2.75 flex rounded-tr-[50px] rounded-br-[50px] rounded-bl-[40px]
        font-normal leading-[150%] tracking-[0%] text-nowrap cursor-pointer
        transition-transform duration-200 ease-in-out
        hover:scale-95
        ${props.className}
      `}
    >

         {props.text}

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={props.iconClass}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 19L19 6M19 6V18.48M19 6H6.52"
          stroke="currentColor"
          strokeWidth="1.93338"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
</button>
  )
}

export default Button