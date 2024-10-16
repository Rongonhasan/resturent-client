import React from "react";
import AppStoreImg from "../../../assets/hero/app_store.png";
import PlayStoreImg from "../../../assets/hero/play_store.png";
import Gif from "../../../assets/hero/mobile_bike.gif";

const AppStore = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-10 h-[300px]">
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400 transition-transform transform hover:scale-105 duration-300">
              Foodly is available for Android and iOS
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
              <a href="#">
                <img
                  src={PlayStoreImg}
                  alt="Play Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] transition-transform transform hover:scale-105 duration-300"
                />
              </a>
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt="App Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] transition-transform transform hover:scale-105 duration-300"
                />
              </a>
            </div>
          </div>
          <div>
            <img
              src={Gif}
              alt="Mobile Bike"
              className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference transition-transform transform hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
