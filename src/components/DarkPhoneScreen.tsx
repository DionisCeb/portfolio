import React from 'react';
import { useState } from 'react';

const DarkPhoneScreen: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [poweredOn, setPoweredOn] = useState(false);
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b px-4">
        <div className="w-[90%] xs:w-[90%] xs1:w-[40%] xl2:w-[50%] aspect-[9/19] rounded-[2rem] bg-black border-[3px] border-gray-800 shadow-2xl relative p-6 text-white">
            {/* Camera Dot */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full z-10"></div>
          
            {/* Side Buttons */}
            <div className="absolute left-[-6px] top-1/4 w-1 h-10 bg-gray-800 rounded-r-md"></div>
            <div className="absolute left-[-6px] top-1/2 w-1 h-6 bg-gray-800 rounded-r-md"></div>
            <div className="absolute right-[-6px] top-1/3 w-1 h-16 bg-gray-800 rounded-l-md"></div>

            {/* Side Buttons (Volume & Power) */}
            <div className="absolute left-[-6px] top-[25%] w-1 h-[8%] bg-gray-800 rounded-r-md" id='volume'></div>
            <div className="absolute left-[-6px] top-[50%] w-1 h-[6%] bg-gray-800 rounded-r-md"></div>
            <div className="absolute right-[-6px] top-[35%] w-1 h-[12%] bg-gray-800 rounded-l-md"></div>
  
            {/* Content Area */}
            <div className="relative z-0 h-full overflow-y-auto custom-scrollbar">
                {!poweredOn ? (
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                <span className="text-gray-500 text-center">Press Power to Light The Screen</span>
                <button
                    className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition"
                    onClick={() => setPoweredOn(true)}
                >
                    🔋 Power On
                </button>
                </div>
            ) : (

                <div className="animate-fadeIn">
                    {children}
                </div>
            )}
            </div>
        </div>
      </div>
    );
  };
  

export default DarkPhoneScreen;
