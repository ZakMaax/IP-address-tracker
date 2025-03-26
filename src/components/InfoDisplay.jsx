export default function InfoDisplay({ info }) {
    return (
      Object.keys(info).length > 0 && (
        <div className="absolute -bottom-18 md:bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 shadow-xl w-[70%] md:w-[90%] font-rubik bg-gray-50 rounded-xl p-2 md:p-4 flex flex-col items-center gap-3 md:gap-5 md:flex-row text-center">
          
          <div className="p-2 md:pr-4 flex flex-col items-center gap-1 md:gap-2 md:border-r border-gray-400">
              <h3 className="text-md md:text-lg text-gray-500">IP address</h3>
              <p className="text-2xl md:text-3xl font-bold text-stone-900">{info.ip}</p>
          </div>
  
          <div className="p-2 md:pr-4 flex flex-col items-center gap-1 md:gap-2 md:border-r border-gray-400">
              <h3 className="text-md md:text-lg text-gray-500">Location</h3>
              <p className="text-xl md:text-3xl font-bold text-stone-900">{info.country} - {info.region}</p>
          </div>
  
          <div className="p-2 md:pr-4 flex flex-col items-center gap-1 md:gap-2 md:border-r border-gray-400">
              <h3 className="text-md md:text-lg text-gray-500">Time Zone</h3>
              <p className="text-xl md:text-3xl font-bold text-stone-900">{info.timezone}</p>
          </div>
  
          <div className="flex flex-col items-center gap-1 md:gap-2">
              <h3 className="text-md md:text-lg text-gray-500">ISP</h3>
              <p className="text-xl md:text-3xl font-bold text-stone-900">{info.isp}</p>
          </div>
  
        </div>
      )
    );
  }
  