/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

const featuredImages = ['https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754__340.jpg', 'https://placeimg.com/300/300/animals', 'https://placeimg.com/300/300/architecture'];

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

    // React.useEffect(() => {
    // startSlider();
    // },[]);

    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick();
        }, 50000);
    };
    return (
      <div className="min-h-screen bg-cyan-800 p-2">
        <div className="w-[100%] relative select-none flex  justify-around">
          <div className="w-[300px] relative select-none h-[300px]">
            <div className="w-[300px] relative select-none h-[200px] mx-8 my-4">
              <img src={featuredImages[0]} alt="" className='m-auto rounded-2xl w-[100%] h-[100%]'/>
            </div>
            <div className="w-[500px] relative select-none h-[300px] mx-8 my-4">
              <img src={featuredImages[0]} alt="" className='m-auto rounded-2xl w-[100%] h-[100%]'/>
            </div>
          </div>
          
          <div className="w-[400px] relative select-none h-[400px] mx-6">
            <div className="w-[400px] relative select-none h-[400px] mx-6">
              <img src={featuredImages[0]} alt="" className='m-auto rounded-full w-[100%] h-[100%]'/>
            </div>
            <h1 className="text-5xl p-3 text-gray-200 mt-4 text-yellow-300">Music Events</h1>
            <p className="text-yellow-100 p-3">Checkout the upcoming music concerts</p>
            
            <a href="#" class="inline-flex m-3 items-center px-3 py-2 text-sm font-medium text-center text-cyan-800 bg-yellow-300 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-300">
              Explore more
            </a>
          </div>
        </div>
      </div>
      );
    }

    export default Coursel
    