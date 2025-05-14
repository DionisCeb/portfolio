import React from 'react';

const DarkPhoneScreen: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b px-4">
        <div className="w-[90%] xs:w-[90%] xs1:w-[40%] xl2:w-[50%] aspect-[9/19] rounded-[2rem] bg-black border-[3px] border-gray-800 shadow-2xl relative overflow-hidden p-6 text-white">
          {/* Camera Dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full z-10"></div>
          
          {/* Side Buttons */}
          <div className="absolute left-[-6px] top-1/4 w-1 h-10 bg-gray-800 rounded-r-md"></div>
          <div className="absolute left-[-6px] top-1/2 w-1 h-6 bg-gray-800 rounded-r-md"></div>
          <div className="absolute right-[-6px] top-1/3 w-1 h-16 bg-gray-800 rounded-l-md"></div>
  
          {/* Content Area */}
          <div className="relative z-0 h-full overflow-y-auto custom-scrollbar">
            {children}
          </div>
        </div>
      </div>
    );
  };
  

export default DarkPhoneScreen;
