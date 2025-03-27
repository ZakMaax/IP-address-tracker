import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Input({onGetIP}) {
  const [input, setInput] = useState("")

  function handleInput(e){
    setInput(e.target.value.trim())
  }

  return (
    <div className="flex items-center justify-center  w-1/3">
        <input value={input} onChange={handleInput} type="text" className="w-auto md:w-full bg-white text-gray-600 rounded-l-xl px-10 py-3 focus:outline-hidden placeholder:text-gray-400 placeholder:text-sm placeholder:md:text-md" placeholder="Search for any IP address or domain"/>
        <button onClick={() => onGetIP(input)} className="text-2xl text-white bg-gray-900 hover:bg-gray-600 px-4 py-3 rounded-r-xl"><MdKeyboardArrowRight/> </button>
    </div>
  )
}