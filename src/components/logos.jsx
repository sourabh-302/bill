 import React from "react";

import logo1 from "../assets/image/image1.png";
import logo2 from "../assets/image/image2.png";
import logo3 from "../assets/image/image3.png";
import logo4 from "../assets/image/image4.png";
import logo5 from "../assets/image/image5.png";
import logo6 from "../assets/image/image6.png";
import logo7 from "../assets/image/image7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

function Logos() {
  return (
    <div className="w-full overflow-hidden py-3 mt-10 bg-white">
      <div className="flex w-max animate-scroll gap-15">
     
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="company logo"
            className="h-14 object-contain"
          />
        ))}

    
        {logos.map((logo, i) => (
          <img
            key={"dup-" + i}
            src={logo}
            alt="company logo"
            className="h-14 object-contain"
          />
        ))}
        
      </div>
    </div>
  );
}

export default Logos;
