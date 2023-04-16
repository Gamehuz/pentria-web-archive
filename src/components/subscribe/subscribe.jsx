import { useState } from "react";

export default function Subscribe() {
  const [subscribe, setSubscribe] = useState("");
  return (
    <div className="bg-primaryColor pt-8">
      <div>
        <h1 className='text-[20px] font-bold text-white text-center'>Subscribe to our Newsletter</h1>
        <div className='text-center pt-8'>
          <input
            className="w-[200px] lg:w-[400px] h-[40px] border-[1px] border-[#E5E5E5] focus:border-0 p-2"
            name="subscribe"
            type={"text"}
            placeholder={"Enter your email"}
            value={subscribe} 
            onChange={(e) => setSubscribe(e.target.value)}
          />
          <button className="w-[100px] h-[41px] bg-secondaryColor text-white">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}
