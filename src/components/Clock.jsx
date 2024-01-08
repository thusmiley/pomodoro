import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const covertColorCode = (color) => {
  switch (color) {
    case "red":
      return `#F87070`;
    case "blue":
      return `#70F3F8`;
    case "purple":
      return `#D881F8`;
  }
};

const Clock = ({ tab, color, controller, setController, pomodoroTimer, shortBreakTimer, longBreakTimer, isMobile }) => {
  const [start, setStart] = useState(false);
  const [key, setKey] = useState(0);

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    if (remainingTime === 0) {
      setController("RESTART");
      <audio controls autoplay src="../../public/beep_short.ogg"></audio>;
    }

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const checkTypeofTimer = () => {
    if (tab[0].name === "pomodoro") {
      return pomodoroTimer * 60;
    }
    if (tab[0].name === "short break") {
      return shortBreakTimer * 60;
    }
    if (tab[0].name === "long break") {
      return longBreakTimer * 60;
    }
  };

  useEffect(() => {
    setController("START");
    checkTypeofTimer();
  }, [tab[0].name]);

  return (
    <div className="box-shadow rounded-full p-[16px] gradient-bg">
      <div className="bg-[#161932] rounded-full p-[10px] relative text-[80px] tracking-[-4px] text-textColor md:text-[100px] md:tracking-[-5px]">
        <CountdownCircleTimer
          isPlaying={start}
          key={key}
          duration={checkTypeofTimer()}
          size={isMobile ? 300 : 400}
          colors={covertColorCode(color)}
          strokeWidth={11}
          rotation="counterclockwise"
          trailColor="transparent"
          onComplete={() => [false, 1000]}
        >
          {children}
        </CountdownCircleTimer>

        <div className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <button
            className={`text-[14px] tracking-[13.13px] text-textColor w-full pl-[13.13px] cursor-pointer transition-all duration-200 ease-linear hover:text-${color} md:text-[16px] md:tracking-[15px]`}
            onClick={() => {
              if (controller === "START") {
                setStart(!start);
                setController("PAUSE");
              }
              if (controller === "RESTART") {
                setController("PAUSE");
                setKey((prevKey) => prevKey + 1);
              }
              if (controller === "PAUSE") {
                setController("START");
                setStart(!start);
              }
            }}
          >
            {controller}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
