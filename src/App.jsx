import { useState, useEffect, Fragment } from "react";
import logo from "./assets/logo.svg";
import settingsIcon from "./assets/icon-settings.svg";
import { Tab } from "@headlessui/react";
import Clock from "./components/Clock";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loadingDuration = 3000; // 3 seconds

  useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      if (loading >= 100) return;
      setProgress(progress + 1);
    }, loadingDuration / 100);
    if (progress === 100) {
      setLoading(false);
    }
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [progress, loading]);

  return (
    <>
      <header>
        <img src={logo} alt="pomodoro logo" className="w-[117px] h-auto object-contain object-center mt-8 mx-auto" />
      </header>
      <main className="px-6 mx-auto mb-[48px]">
        <Tab.Group>
          <Tab.List as={Fragment}>
            <div className="mt-[45px] mb-[48px] bg-[#161932] max-w-[373px] rounded-full p-2 mx-auto grid place-content-center grid-cols-3 relative">
              <Tab as={Fragment}>
                {({ selected }) => <button className={`${selected ? "bg-red text-darkNavy border-none outline-none hover:text-darkNavy" : ""} tab-btn`}>pomodoro</button>}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => <button className={`${selected ? "bg-red text-darkNavy border-none outline-none hover:text-darkNavy" : ""} tab-btn`}>short break</button>}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => <button className={`${selected ? "bg-red text-darkNavy border-none outline-none hover:text-darkNavy" : ""} tab-btn`}>long break</button>}
              </Tab>
            </div>
          </Tab.List>
          <Tab.Panels as={Fragment}>
            <div className="grid place-content-center">
              <Tab.Panel>
                <Clock progress={progress} trackWidth={5} indicatorWidth={10} />
              </Tab.Panel>
              <Tab.Panel>
                <Clock progress={progress} trackWidth={5} indicatorWidth={10} />
              </Tab.Panel>
              <Tab.Panel>
                <Clock progress={progress} trackWidth={5} indicatorWidth={10} />
              </Tab.Panel>
            </div>
          </Tab.Panels>
        </Tab.Group>

        <img src={settingsIcon} alt="settings" className="mx-auto mt-[79px] cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in" />
      </main>
    </>
  );
}

export default App;
