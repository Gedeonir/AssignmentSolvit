/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

const featuredImages = ['https://placeimg.com/300/300/any', 'https://placeimg.com/300/300/animals', 'https://placeimg.com/300/300/architecture'];

  const Coursel=()=>{
    const [currentIndex, setCurrentIndex] = React.useState(0);
	let count=0
    const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    };
    
    const handleOnPrevClick = () => {
        const productsLength = featuredImages.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
    };

    React.useEffect(() => {
    startSlider();
    },[]);

    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick();
        }, 50000);
    };
    return (
        <div className="max-w-screen-xl m-10 bg-gray-600">
            <div className="w-[100%] bg-gray-600 relative select-none">
              <img src={featuredImages[currentIndex]} alt="" className='m-auto'/>

              <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
                <button onClick={handleOnPrevClick} className='text-gray-300'>Previous</button>
                <button onClick={handleOnNextClick} className='text-gray-300'>Next</button>
                
              </div>
            </div>
          </div>
      );
    }

    export default Coursel
    