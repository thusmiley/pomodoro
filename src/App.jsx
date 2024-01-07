import { useState, useEffect, Fragment } from "react";
import logo from "./assets/logo.svg";
import settingsIcon from "./assets/icon-settings.svg";
import { Tab, Transition } from "@headlessui/react";
import Clock from "./components/Clock";
import Clock2 from "./components/Clock";
import Settings from "./components/Settings";

const colors = ["red", "blue", "purple"];
const fonts = ["sans", "slab", "mono"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  let [tabs] = useState({
    pomodoro: [{ id: 1, name: "pomodoro" }],
    "short break": [{ id: 2, name: "short break" }],
    "long break": [{ id: 3, name: "long break" }],
  });
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loadingDuration = 3000; // 3 seconds
  const [isOpen, setIsOpen] = useState(false);
  const [pomodoroTimer, setPomodoroTimer] = useState(25);
  const [shortBreakTimer, setShortBreakTimer] = useState(5);
  const [longBreakTimer, setLongBreakTimer] = useState(15);
  const [font, setFont] = useState(fonts[0]);
  const [color, setColor] = useState(colors[0]);
  const [controller, setController] = useState("START");

  useEffect(() => {
    document.body.className = `font-${font}`;
  }, [font]);

  return (
    <>
      <header>
        <img src={logo} alt="pomodoro logo" className="w-[117px] h-auto object-contain object-center mt-8 mx-auto md:w-[156px] md:mt-[80px] xl:mt-[48px]" />
      </header>
      <main id="main-font" className="px-6 mx-auto mb-[48px] md:mb-[103px] xl:mb-[56px]">
        <Tab.Group>
          <Tab.List className="mt-[45px] mb-[48px] bg-[#161932] max-w-[410px] rounded-full p-2 mx-auto grid place-content-center grid-cols-3 relative md:mt-[55px] md:mb-[109px] xl:mb-[45px]">
            {Object.keys(tabs).map((tab, index) => (
              <Tab key={index} className={({ selected }) => classNames("tab-btn", selected ? `bg-${color} text-darkNavy border-none outline-none hover:text-darkNavy` : "")}>
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="grid place-content-center max-w-[410px] mx-auto">
            {Object.values(tabs).map((tab, index) => (
              <Tab.Panel key={index}>
                <Clock
                  tab={tab}
                  controller={controller}
                  setController={setController}
                  color={color}
                  pomodoroTimer={pomodoroTimer}
                  shortBreakTimer={shortBreakTimer}
                  longBreakTimer={longBreakTimer}
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <img
          src={settingsIcon}
          alt="settings"
          className="mx-auto mt-[79px] cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in md:mt-[144px] xl:mt-[63px]"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && <div className="w-full h-full fixed bg-[#0A0C1C]/50 top-0 left-0 right-0 bottom-0" onClick={() => setIsOpen(!isOpen)} />}

        <Transition
          show={isOpen}
          enter="ease-out transition-opacity duration-500"
          enterFrom="opacity-0 scale-75"
          enterTo="opacity-100 scale-1"
          leave="ease-in transition-opacity duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Settings
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pomodoroTimer={pomodoroTimer}
            setPomodoroTimer={setPomodoroTimer}
            shortBreakTimer={shortBreakTimer}
            setShortBreakTimer={setShortBreakTimer}
            longBreakTimer={longBreakTimer}
            setLongBreakTimer={setLongBreakTimer}
            fonts={fonts}
            font={font}
            setFont={setFont}
            colors={colors}
            color={color}
            setColor={setColor}
          />
        </Transition>
      </main>
    </>
  );
}

export default App;
