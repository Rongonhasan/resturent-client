// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import img1 from '../../../assets/home/01.jpg';
// import img2 from '../../../assets/home/02.jpg';
// import img3 from '../../../assets/home/03.png';
// import img4 from '../../../assets/home/04.jpg';
// import img5 from '../../../assets/home/05.png';
// import img6 from '../../../assets/home/06.png';

// const Banner = () => {
//     return (
        
//  <Carousel>
//             <div>
//                 <img src={img1} />
//             </div>
//             <div>
//                 <img src={img2} />
//             </div>
//             <div>
//                 <img src={img3} />
//             </div>
//             <div>
//                 <img src={img4} />
//             </div>
//             <div>
//                 <img src={img5} />
//             </div>
//             <div>
//                 <img src={img6} />
//             </div>
//         </Carousel>
  
       
//     );
// };

// export default Banner;

import React from "react";
import BiryaniImg1 from "../../../assets/hero/biryani3.png";
import BiryaniImg2 from "../../../assets/hero/biryani5.png";
import BiryaniImg3 from "../../../assets/hero/biryani2.png";
import Vector from "../../../assets/hero/vector3.png";

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(BiryaniImg1);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 border-b-2"
        style={bgImage}
      >
        <div className="w-full max-w-screen-xl mx-auto pb-8 sm:pb-0 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Welcome{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  Foodie
                </span>{" "}
                Zone HELIUM
              </h1>
              <p className="text-sm sm:text-base">
              Here, every dish is a masterpiece, crafted with passion and expertise. Immerse yourself in a dining experience where exceptional flavors and great company come together. Join us and savor the art of exquisite cuisine!
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[350px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <div className="h-[250px] sm:h-[400px] overflow-hidden flex justify-center items-center">
                <img
                  src={imageId}
                  alt="biryani img"
                  className="w-[250px] sm:w-[350px] sm:scale-125 mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-0 lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    onClick={() => setImageId(item.img)}
                    alt="biryani img"
                    className="max-w-[60px] sm:max-w-[80px] h-[60px] sm:h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
