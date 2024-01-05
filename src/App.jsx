import { useState, useEffect, Fragment } from "react";
import logo from "./assets/logo.svg";
import settingsIcon from "./assets/icon-settings.svg";
import { Tab, Transition } from "@headlessui/react";
import Clock from "./components/Clock";
import Settings from "./components/Settings";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loadingDuration = 3000; // 3 seconds
  const [isOpen, setIsOpen] = useState(false);

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
        <img src={logo} alt="pomodoro logo" className="w-[117px] h-auto object-contain object-center mt-8 mx-auto md:w-[156px] md:mt-[80px] xl:mt-[48px]" />
      </header>
      <main className="px-6 mx-auto mb-[48px] md:mb-[103px] xl:mb-[56px]">
        <Tab.Group>
          <Tab.List as={Fragment}>
            <div className="mt-[45px] mb-[48px] bg-[#161932] max-w-[373px] rounded-full p-2 mx-auto grid place-content-center grid-cols-3 relative md:mt-[55px] md:mb-[109px] xl:mb-[45px]">
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
            <div className="grid place-content-center max-w-[410px] mx-auto">
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
          <Settings isOpen={isOpen} setIsOpen={setIsOpen} />
        </Transition>
      </main>
    </>
  );
}

export default App;
