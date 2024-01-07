import React, { useEffect, useState } from "react";
import "./clock.css";

const Clock = (props) => {
  let {
    size = 248.05,
    progress = 100,
    trackWidth = 11,
    indicatorWidth = 11,
    spinnerMode = false,
    spinnerSpeed = 1,
    controller,
    setController,
    color,
    tab,
    pomodoroTimer,
    shortBreakTimer,
    longBreakTimer,
  } = props;

  const center = size / 2,
    radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

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

  return (
    <div className="box-shadow rounded-full p-[16px] gradient-bg">
      <div className="bg-[#161932] rounded-full p-[6px] relative">
        <div className={`relative w-${size} h-${size}`}>
          <svg className="svg-pi" style={{ width: size, height: size }}>
            <circle className="" cx={center} cy={center} fill="transparent" r={radius} stroke="#161932" strokeWidth={trackWidth} />
            <circle
              style={{ animationDuration: spinnerSpeed * 1000 }}
              cx={center}
              cy={center}
              fill="transparent"
              r={radius}
              stroke={covertColorCode(color)}
              strokeWidth={indicatorWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
            <h1 className="text-[80px] tracking-[-4px] text-textColor">25:00</h1>
            <p className={`text-[14px] tracking-[13.13px] text-textColor w-full pl-[13.13px] cursor-pointer transition-all duration-200 ease-linear hover:text-${color}`}>{controller}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
