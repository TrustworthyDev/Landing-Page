import React from "react";

export default function TabButton({
  index,
  activeTab,
  setActiveTab,
  setActiveSubMenu,
  setActiveFinalMenu,
  setShowMain,
  item,
}) {
  return (
    <button
      className={`${
        index === activeTab ? "opacity-100" : "opacity-100 md:opacity-40"
      } text-[#121212] w-full font-neuemontreal-medium flex flow-row justify-start items-center px-4 font-montreal font-medium text-left text-2xl xl:text-[calc(24px+0.3vw)] leading-5 -tracking-[.02em] transition-opacity hover:bg-[#F9F9F9] xl:hover:bg-[#E7E7E7] active:opacity-80 py-[13px] 3xl:py-4 3xl:text-[32px] 3xl:leading-[21px]`}
      onClick={() => {
        setActiveTab(index);
        setActiveSubMenu(-1);
        setActiveFinalMenu(-1);
        setShowMain(false);
      }}
      onMouseEnter={() => {
        if (window.innerWidth > 1280) {
          setActiveTab(index);
          setActiveSubMenu(-1);
          setActiveFinalMenu(-1);
          setShowMain(false);
        }
      }}
    >
      {item.name}
      <div className="ml-1 mb-auto font-neuemontreal-book text-xs leading-[9px] -tracking-[.005em]">
        {"0" + (index + 1)}
      </div>
      {index === activeTab ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="15"
          viewBox="0 0 24 17"
          fill="none"
          className="hidden md:block ml-auto transition-opacity ease-in duration-300 opacity-100 3xl:w-[23px] 3xl:h-[15px] w-4 h-[10px]"
        >
          <path
            d="M15.1094 1.16016L22.6094 8.66016L15.1094 16.1602"
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
          <path
            d="M22.6094 8.6582L0.109375 8.6582"
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
        </svg>
      ) : null}
    </button>
  );
}
