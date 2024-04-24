import React, { useState, useEffect } from "react";
import Image from "next/image";
import Section3_Image from "@/assets/images/landing/section3/section3.svg";

export default function Section3() {
  const [noseTypes, setNoseTypes] = useState([
    "SNUBBED",
    "GRECCIAN",
    "DROOPY",
    "ORIGINAL",
    "SNUBBED",
    "UPTURNED",
    "GRECCIAN",
  ]);
  const [activeButton, setActiveButton] = useState(3);

  function rotateArray(arr, selected) {
    if (selected !== -1) {
      const rotatedPart = arr.splice(0, (4 + selected) % 7);
      return arr.concat(rotatedPart);
    } else {
      return arr;
    }
  }

  const handleButtonClick = (index) => {
    setActiveButton(index);
    setNoseTypes(rotateArray(noseTypes, index));
  };

  return (
    <>
      <div className="section3 flex xl:flex-row flex-col w-screen h-screen 3xl:px-6 3xl:pt-[127px] 3xl:pb-8 xl:px-4 md:px-6 xl:pt-[85px] pt-[104px] xl:pb-6">
        <div className="flex xl:flex-col md:flex-row flex-col xl:w-1/4 w-full justify-between xl:items-start items-center md:gap-0 gap-3">
          <div className="md:flex hidden flex-col font-normal text-[#233137] 3xl:text-[70px] 3xl:leading-[72px] text-[48px] leading-[49px] -tracking-[0.03em]">
            <div className="font-neuemontreal-book">Diagnostics </div>
            <div className="flex">
              <span className="font-neuemontreal-book">{"to"} &nbsp;</span>
              <span className="font-dentoncondensedtest">
                {"visualization"}
              </span>
            </div>
          </div>
          <div className="md:hidden flex flex-col items-center font-normal text-[#233137] text-[42px] leading-[44px] -tracking-[0.03em]">
            <div className="font-neuemontreal-book">Diagnostics to </div>
            <div className="flex">
              <span className="font-dentoncondensedtest">
                {"visualization"}
              </span>
            </div>
          </div>
          <div className="md:text-start text-center 3xl:w-[390px] xl:w-[260px] md:w-[288px] w-[328px] font-medium font-neuemontreal-book text-[#7D828E] 3xl:text-[20px] 3xl:leading-[24px] text-[14px] leading-[16.8px] -tracking-[0.005em]">
            State-of-the-art technology now allowing you to see what your face
            could look like with a level of precision previously unattainable.
          </div>
        </div>
        <div className="flex xl:flex-row flex-col-reverse xl:w-3/4 w-full">
          <div className="xl:w-2/3 w-full flex xl:items-end justify-center md:mt-0 mt-6">
            <Image
              src={Section3_Image}
              alt="alt"
              className="3xl:w-[812px] 3xl:h-[736px] w-[670px] xl:h-[606px] h-full"
            />
          </div>
          <div className="flex xl:flex-row flex-col items-center justify-between xl:w-1/3 w-full xl:mt-0 mt-[90px] xl:gap-0 gap-11">
            <div className="flex gap-[10px]">
              <div className="font-normal font-F37ZagmaMonoTrial-Book 3xl:text-[16px] md:text-[11px] text-[12px] 3xl:leading-[22px] leading-[15px] text-[#7D828E]">
                CHOOSE VISUALISATION
              </div>
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="3xl:block hidden"
              >
                <path
                  d="M15 9L-8.15666e-07 17.6603L-5.85621e-08 0.339745L15 9Z"
                  fill="#C4C6CA"
                />
              </svg>
            </div>
            <div className="flex xl:flex-col flex-row overflow-x-hidden md:w-fit w-full justify-between 3xl:h-[670px] xl:h-[446px] xl:gap-0 md:gap-8 gap-[27px]">
              {noseTypes.map((item, index) => {
                const paddingClasses = [
                  "3xl:pl-[102px] xl:pl-[68px]",
                  "3xl:pl-[56px] xl:pl-[37px]",
                  "3xl:pl-[41px] xl:pl-[27px]",
                  "pl-0",
                ];
                const opacityClasses = [
                  "opacity-10",
                  "opacity-30",
                  "opacity-50",
                  "opacity-100",
                ];
                const adjustedIndex = Math.min(index, 6 - index);

                return (
                  <div
                    key={index}
                    className={`flex items-center ${paddingClasses[adjustedIndex]} ${opacityClasses[adjustedIndex]}`}
                  >
                    <button
                      className="font-F37ZagmaMonoTrial-Book text-[#7D828E] 3xl:text-[20px] xl:text-[13px] 3xl:leading-[28px] xl:leading-[19px] text-[16px] leading-[22.4px] font-normal"
                      onClick={() => handleButtonClick(index)}
                    >
                      {item}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
