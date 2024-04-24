import React from "react";

export default function SubMenu({
  index,
  activeTab,
  activeSubMenu,
  setActiveFinalMenu,
  setActiveSubMenu,
  item,
  headerLen,
}) {
  return (
    <button
      className={`${
        index === activeSubMenu ? "opacity-100" : "opacity-100 lg:opacity-40"
      } w-full font-neuemontreal-medium flex flex-row justify-start items-center px-4 py-[10px] font-montreal font-medium text-[20px] leading-5 -tracking-[.02em] capitalize  3xl:py-4 3xl:text-2xl 3xl:leading-[21px] hover:bg-[#F9F9F9] xl:hover:bg-[#E7E7E7] active:opacity-80`}
      onClick={() => {
        setActiveFinalMenu(-1);
        setActiveSubMenu(index);
      }}
      onMouseEnter={() => {
        setActiveFinalMenu(-1);
        setActiveSubMenu(index);
      }}
    >
      {item.name}
      {index === activeSubMenu ? (
        activeTab === headerLen ? (
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden xl:block ml-auto transition-opacity ease-in duration-300 opacity-100 w-4 h-3 3xl:w-5 3xl:h-[15px]"
          >
            <path
              d="M6.46525 1.42903H17.0719V12.0356"
              stroke="#121212"
              strokeWidth="1.5"
            />
            <path
              d="M17.0703 1.42749L2.92818 15.5696"
              stroke="#121212"
              strokeWidth="1.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="15"
            viewBox="0 0 24 17"
            fill="none"
            className="hidden xl:block ml-auto transition-opacity ease-in duration-300 opacity-100  w-4 h-[10px] 3xl:w-[23px] 3xl:h-[15px]"
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
        )
      ) : null}
    </button>
  );
}
