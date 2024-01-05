import React from "react";
import "./clock.css";

const Clock = (props) => {
  let {
    size = 248.05,
    progress = 0,
    trackWidth = 11,
    trackColor = `#161932`,
    indicatorWidth = 10,
    indicatorColor = `#F87070`,
    indicatorCap = `round`,
    label = `Loading...`,
    labelColor = `#333`,
    spinnerMode = false,
    spinnerSpeed = 1,
  } = props;

  const center = size / 2,
    radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

  return (
    <div className="box-shadow rounded-full p-[16px] gradient-bg">
      <div className="bg-[#161932] rounded-full p-[3px] relative">
        <div className="svg-pi-wrapper " style={{ width: size, height: size }}>
          <svg className="svg-pi" style={{ width: size, height: size }}>
            <circle className="svg-pi-track" cx={center} cy={center} fill="transparent" r={radius} stroke={trackColor} strokeWidth={trackWidth} />
            <circle
              className={`svg-pi-indicator ${spinnerMode ? "svg-pi-indicator--spinner" : ""}`}
              style={{ animationDuration: spinnerSpeed * 1000 }}
              cx={center}
              cy={center}
              fill="transparent"
              r={radius}
              stroke={indicatorColor}
              strokeWidth={indicatorWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap={indicatorCap}
            />
          </svg>

          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
            <h1 className="text-[80px] tracking-[-4px] text-textColor ">17:59</h1>
            <p className="text-[14px] tracking-[13.13px] text-textColor">PAUSE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
