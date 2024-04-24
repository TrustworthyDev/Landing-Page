import React from "react";

export default function FinalMenu({
  index,
  activeFinalMenu,
  setActiveFinalMenu,
  handleMouseHoverAnimation,
  item,
}) {
  return (
    <div className="flex items-center">
      <button
        className={`${
          index === activeFinalMenu
            ? "opacity-100"
            : "xl:opacity-40 opacity-100"
        } final-${index} text-[#121212] -tracking-[.02em] w-full font-neuemontreal-medium flex flex-row justify-start items-center px-4 py-[10px] font-montreal font-medium text-[20px] leading-5 capitalize  3xl:py-4 3xl:text-2xl 3xl:leading-none active:opacity-80`}
        onClick={() => {
          setActiveFinalMenu(index);
        }}
        onMouseOver={() => {
          handleMouseHoverAnimation(".final-" + index, item, index);
        }}
      >
        {item}
      </button>
      {index === activeFinalMenu ? (
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
      ) : null}
    </div>
  );
}
