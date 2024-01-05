import checkIcon from "../assets/check-icon.svg";
import { RadioGroup } from "@headlessui/react";
import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import "./settings.css";

const Settings = ({ isOpen, setIsOpen }) => {
  const [font, setFont] = useState("sans");
  const [color, setColor] = useState("red");

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-6 w-full max-w-[540px] ">
      <div className="flex justify-between items-center pb-7 bg-white pt-6 rounded-t-[15px] px-6 md:py-[34px] md:px-10 md:rounded-t-[25px]">
        <h2 className="text-[20px] text-[#161932] md:text-[28px]">Settings</h2>
        <svg
          alt="close"
          className="cursor-pointer opacity-50 transition-opacity duration-200 ease-linear hover:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            fill="#1E213F"
            fillRule="evenodd"
            d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
          />
        </svg>
      </div>
      {/* divider */}
      <div className="w-full h-[1px] bg-[#fafafa]" />

      <form className="bg-white pt-6 rounded-b-[15px] px-6 relative md:pt-[34px] md:px-10 md:rounded-b-[25px]">
        {/* time */}
        <div>
          <h3 className="text-[11px] tracking-[4.23px] text-center mb-[15px] md:text-left md:text-[13px] md:tracking-[5px] md:mb-[26px]">TIME (MINUTES)</h3>
          <div className="md:flex md:items-center md:justify-between md:space-x-5">
            {/* pomodoro */}
            <div className="flex justify-between items-center md:flex-col md:justify-start">
              <h4 className="text-[12px] text-[#1E213F]/40 w-full md:mb-[10px] md:text-left">pomodoro</h4>
              <div className="bg-[#EFF1FA] rounded-[10px] flex justify-between items-center p-4 w-1/2 md:min-w-[120px]">
                <p className="text-[14px] text-[#1E213F]">25</p>
                <div className="space-y-[9px]">
                  <svg
                    alt="decrease"
                    className="cursor-pointer opacity-25 transition-opacity duration-200 ease-in hover:opacity-100"
                    alt="increase"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                  >
                    <path fill="none" stroke="#1E213F" strokeWidth="2" d="M1 6l6-4 6 4" />
                  </svg>
                  <svg
                    alt="decrease"
                    className="cursor-pointer opacity-25 transition-opacity duration-200 ease-in  hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                  >
                    <path fill="none" stroke="#1E213F" strokeWidth="2" d="M1 1l6 4 6-4" />
                  </svg>
                </div>
              </div>
            </div>
            {/* short break */}
            <div className="flex justify-between items-center my-2 md:flex-col md:my-0 md:justify-start">
              <h4 className="text-[12px] text-[#1E213F]/40 w-full md:mb-[10px] md:text-left">short break</h4>
              <div className="bg-[#EFF1FA] rounded-[10px] flex justify-between items-center p-4 w-1/2 md:min-w-[120px]">
                <p className="text-[14px] text-[#1E213F]">5</p>
                <div className="space-y-[9px]">
                  <svg
                    alt="decrease"
                    className="cursor-pointer opacity-25 transition-opacity duration-200 ease-in hover:opacity-100"
                    alt="increase"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                  >
                    <path fill="none" stroke="#1E213F" strokeWidth="2" d="M1 6l6-4 6 4" />
                  </svg>
                  <svg
                    alt="decrease"
                    className="cursor-pointer opacity-25 transition-opacity duration-200 ease-in  hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                  >
                    <path fill="none" stroke="#1E213F" strokeWidth="2" d="M1 1l6 4 6-4" />
                  </svg>
                </div>
              </div>
            </div>
            {/* long break */}
            <div className="flex justify-between items-center md:flex-col md:justify-start">
              <h4 className="text-[12px] text-[#1E213F]/40 w-full md:mb-[10px] md:text-left">long break</h4>
              <div className="bg-[#EFF1FA] rounded-[10px] flex justify-between items-center p-4 w-1/2 md:min-w-[120px]">
                <p className="text-[14px] text-[#1E213F]">15</p>
                <div className="space-y-[9px]">
                  <svg
                    alt="decrease"
                    className="cursor-pointer opacity-25 transition-opacity duration-200 ease-in hover:opacity-100"
                    alt="increase"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                  >
                    <path fill="none" stroke="#1E213F" strokeWidth="2" d="M1 6l6-4 6 4" />
                  </svg>
                  <svg
                    alt="decrease"
                    className="cursor-pointer opacity-25 transition-opacity duration-200 ease-in  hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                  >
                    <path fill="none" stroke="#1E213F" strokeWidth="2" d="M1 1l6 4 6-4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="w-full h-[1px] bg-[#E3E1E1] my-6" />
        {/* font */}
        <div className="md:flex md:justify-between md:items-center">
          <h3 className="text-[11px] tracking-[4.23px] text-center mb-[18px] md:mb-0 md:text-[13px] md:tracking-[5px]">FONT</h3>
          <RadioGroup value={font} onChange={setFont} className={`flex items-center justify-center space-x-4`}>
            <RadioGroup.Option
              value="sans"
              className={({ active, checked }) =>
                `${active ? "ring-1 ring-[#EFF1FA]" : ""}
                  ${checked ? "bg-[#161932] text-white transition-all duration-300 ease-linear" : "bg-[#EFF1FA] text-darkNavy/70"}
                   cursor-pointer w-10 h-10 rounded-full text-[15px] grid place-content-center hover:ring-1 hover:ring-[#EFF1FA] hover:ring-offset-2`
              }
            >
              Aa
            </RadioGroup.Option>
            <RadioGroup.Option
              value="slab"
              className={({ active, checked }) =>
                `${active ? "ring-1 ring-[#EFF1FA]" : ""}
                  ${checked ? "bg-[#161932] text-white transition-all duration-300 ease-linear" : "bg-[#EFF1FA] text-darkNavy/70"}
                   cursor-pointer w-10 h-10 rounded-full text-[15px] grid place-content-center hover:ring-1 hover:ring-[#EFF1FA] hover:ring-offset-2`
              }
            >
              Aa
            </RadioGroup.Option>
            <RadioGroup.Option
              value="mono"
              className={({ active, checked }) =>
                `${active ? "ring-1 ring-[#EFF1FA]" : ""}
                  ${checked ? "bg-[#161932] text-white transition-all duration-300 ease-linear" : "bg-[#EFF1FA] text-darkNavy/70"} 
                   cursor-pointer w-10 h-10 rounded-full text-[15px] grid place-content-center hover:ring-1 hover:ring-[#EFF1FA] hover:ring-offset-2`
              }
            >
              Aa
            </RadioGroup.Option>
          </RadioGroup>
        </div>
        {/* divider */}
        <div className="w-full h-[1px] bg-[#E3E1E1] my-6" />
        {/* color */}
        <div className="pb-[59px] md:flex md:justify-between md:items-center">
          <h3 className="text-[11px] tracking-[4.23px] text-center mb-[18px] md:mb-0 md:text-[13px] md:tracking-[5px] ">COLOR</h3>
          <RadioGroup value={color} onChange={setColor} className={`flex items-center justify-center space-x-4`}>
            <RadioGroup.Option
              value="red"
              className={({ active, checked }) =>
                `${active ? "ring-1 ring-[#EFF1FA]" : ""}
                  ${checked ? "" : ""} bg-red
                   cursor-pointer w-10 h-10 rounded-full grid place-content-center hover:ring-1 hover:ring-[#EFF1FA] hover:ring-offset-2`
              }
            >
              {({ checked }) => <img src={checkIcon} alt="" className={checked ? "opacity-100 transition-opacity duration-200 ease-linear" : "opacity-0"} />}
            </RadioGroup.Option>
            <RadioGroup.Option
              value="blue"
              className={({ active, checked }) =>
                `${active ? "ring-1 ring-[#EFF1FA]" : ""}
                  ${checked ? "" : ""} bg-blue
                   cursor-pointer w-10 h-10 rounded-full text-[15px] grid place-content-center hover:ring-1 hover:ring-[#EFF1FA] hover:ring-offset-2`
              }
            >
              {({ checked }) => <img src={checkIcon} alt="" className={checked ? "opacity-100 transition-opacity duration-200 ease-linear" : "opacity-0"} />}
            </RadioGroup.Option>
            <RadioGroup.Option
              value="purple"
              className={({ active, checked }) =>
                `${active ? "ring-1 ring-[#EFF1FA]" : ""}
                  ${checked ? "" : ""} bg-purple 
                   cursor-pointer w-10 h-10 rounded-full text-[15px] grid place-content-center hover:ring-1 hover:ring-[#EFF1FA] hover:ring-offset-2`
              }
            >
              {({ checked }) => <img src={checkIcon} alt="" className={checked ? "opacity-100 transition-opacity duration-200 ease-linear" : "opacity-0"} />}
            </RadioGroup.Option>
          </RadioGroup>
        </div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <button type="submit" className="bg-red text-[16px] text-white py-5 px-[47px] rounded-full absolute bottom-[-30px] left-0 right-0 mx-auto w-[140px] hover:bg-[#F87070]">
            Apply
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default Settings;
