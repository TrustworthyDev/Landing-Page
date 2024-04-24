import React, { useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "/gsap-bonus/package/dist/gsap.js";
import ScrollSmoother from "/gsap-bonus/package/dist/ScrollSmoother";
import ScrollTrigger from "/gsap-bonus/package/dist/ScrollTrigger";
import ScrambleTextPlugin from "/gsap-bonus/package/dist/ScrambleTextPlugin";
import ScrollToPlugin from "/gsap-bonus/package/dist/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

import Logo from "@/assets/images/header/logo.svg";
import CloseImage from "@/assets/images/header/close.svg";
import ExtendImage from "@/assets/images/header/extend.svg";
import ShopImage from "@/assets/images/header/shop.svg";
import ArrowLeftImage from "@/assets/images/header/arrow-left.svg";
import ArrowLeftTopImage from "@/assets/images/header/arrow-left-top.svg";
import ArrowRightImage from "@/assets/images/header/arrow-right.svg";
import ClientImage from "@/assets/images/header/client.png";

import TabButton from "./TabButton";
import SubMenu from "./SubMenu";
import { HeaderItems } from "./HeaderItems";
import { scrambleText } from "@/utils/GlobalScript";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  ScrambleTextPlugin,
  ScrollToPlugin
);

export default function Header() {
  const mainRef = useRef(null);
  const subRef = useRef(null);
  const finalRef = useRef(null);
  const mdRef = useRef(null);
  const [extended, setExtended] = useState(false);
  const [activeTab, setActiveTab] = useState(-1);
  const [activeSubMenu, setActiveSubMenu] = useState(-1);
  const [activeFinalMenu, setActiveFinalMenu] = useState(-1);
  const [showMain, setShowMain] = useState(true);

  const extendAnimation = () => {
    if (!extended) {
      setExtended(true);
      if (window.innerWidth >= 1280) {
        gsap.to(
          [mainRef.current, subRef.current, finalRef.current, mdRef.current],
          {
            duration: 0.3,
            y: 0,
            stagger: 0.15,
            yoyo: true,
          }
        );
      } else {
        gsap.to(
          [mainRef.current, mdRef.current, subRef.current, finalRef.current],
          {
            duration: 0.3,
            y: 0,
            stagger: 0.15,
            yoyo: true,
          }
        );
      }
    } else {
      if (window.innerWidth >= 1280) {
        gsap.to(
          [finalRef.current, subRef.current, mainRef.current, mdRef.current],
          {
            duration: 0.3,
            y: "-100%",
            stagger: 0.2,
            onComplete: () => {
              setExtended(false);
              setActiveTab(-1);
              setActiveSubMenu(-1);
              setActiveFinalMenu(-1);
            },
          }
        );
      } else {
        setShowMain(true);
        gsap.to(
          [mdRef.current, mainRef.current, finalRef.current, subRef.current],
          {
            duration: 0.3,
            y: "-100%",
            stagger: 0.2,
            onComplete: () => {
              setExtended(false);
              setActiveTab(-1);
              setActiveSubMenu(-1);
              setActiveFinalMenu(-1);
            },
          }
        );
      }
    }
  };

  const handleMouseHoverAnimation = (item, text, index) => {
    if (item) {
      setActiveFinalMenu(index);
      scrambleText(item, text);
    }
  };

  return (
    <>
      <div className="w-full fixed inset-x-0 top-0 z-30 select-none">
        <div
          className="hidden w-screen h-auto fixed inset-0 cursor-pointer bg-black opacity-0"
          style={{
            opacity: extended ? 0.3 : 0,
            display: extended ? "block" : "none",
          }}
          onClick={() => {
            extendAnimation();
          }}
        ></div>

        <div className="w-full md:h-[50px] h-[88px] fixed z-40 inset-x-0 top-0 bottom-0 mx-auto">
          <div className="w-full h-full mx-auto flex justify-center overflow-hidden">
            <div className="header relative bg-white border md:flex hidden justify-between min-w-full h-full text-zinc-600 cursor-default">
              <div className="flex">
                <div className="md:w-[72px] w-[60px] flex-none border-r">
                  <button
                    className="w-full h-full flex items-center justify-center hover:bg-[#E7E7E7] active:opacity-60"
                    onClick={() => {
                      extendAnimation();
                    }}
                  >
                    {extended ? (
                      <Image src={CloseImage} alt="close" className="w-6 h-6" />
                    ) : (
                      <Image src={ExtendImage} alt="ext" className="w-6 h-2" />
                    )}
                  </button>
                </div>
                <div className="h-full border-r">
                  <Image src={Logo} alt="logo" className="w-full h-full" />
                </div>
              </div>
              <div className="flex">
                <button className="w-fit h-full items-center gap-2 border-x px-6 hover:bg-[#E7E7E7] active:opacity-60 flex flex-row justify-center">
                  <div className="text-[#121212] font-neuemontreal-medium text-lg font-medium whitespace-nowrap leading-[21px]">
                    {"Facial Assessment"}
                  </div>
                  <div className="bg-[#C2DDE4] px-1 text-[#233137] text-[12px] font-normal leading-[21px] uppercase font-neuemontreal-medium">
                    Free
                  </div>
                </button>
                <button className="w-fit h-full flex flex-row gap-3 justify-center items-center px-6 text-sm leading-[18px] active:opacity-60 hover:bg-[#E7E7E7]">
                  <Image src={ShopImage} alt="shop" />
                  <div className="text-lg font-medium font-neuemontreal-medium text-[#121212] leading-[21.6px]">
                    0
                  </div>
                </button>
              </div>
            </div>

            <div className="header relative md:hidden bg-white border flex flex-col min-w-full h-full text-zinc-600 cursor-default">
              <div className="flex h-[44px] w-full justify-between border-b">
                <div className="flex">
                  <div className="h-full w-[44px] border-r">
                    <Image src={Logo} alt="logo" className="w-full h-full" />
                  </div>
                </div>
                <div className="flex">
                  <button className="w-fit h-full border-x flex flex-row gap-2 justify-center items-center px-3 text-sm leading-[18px] active:opacity-60 hover:bg-[#E7E7E7]">
                    <Image src={ShopImage} alt="shop" />
                    <div className="text-lg font-medium font-neuemontreal-medium text-[#121212] leading-[21px]">
                      0
                    </div>
                  </button>
                  <div className="w-[48px] flex-none">
                    <button
                      className="w-full h-full flex items-center justify-center px-3 hover:bg-[#E7E7E7] active:opacity-60"
                      onClick={() => {
                        extendAnimation();
                      }}
                    >
                      {extended ? (
                        <Image
                          src={CloseImage}
                          alt="close"
                          className="w-6 h-6"
                        />
                      ) : (
                        <Image
                          src={ExtendImage}
                          alt="ext"
                          className="w-6 h-2"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <button className="w-full grow flex justify-between items-center px-3">
                <div className="flex gap-2">
                  <div className="text-[14px] text-[#233137] font-medium leading-[21px] font-neuemontreal-medium">
                    Facial Assessment
                  </div>
                  <div className="bg-[#C2DDE4] px-1 text-[12px] leading-[21px] font-medium font-neuemontreal-medium uppercase text-[#233137]">
                    free
                  </div>
                </div>
                <Image src={ArrowLeftImage} alt="arrow" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="hidden w-full h-auto fixed inset-x-0 md:top-[50px] top-[88px] bottom-4 z-30 mx-auto overflow-hidden select-text"
          style={{ display: extended ? "block" : "none" }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <div className="header-container absolute inset-x-0 top-0 bottom-0 w-full h-auto lg:bottom-auto">
              <div className="w-full h-full relative flex flex-row items-stretch lg:h-[28.125vw] lg:max-h-[507px] 3xl:min-h-[507px]">
                <div
                  className={`w-full flex-none absolute inset-0 z-10 overflow-hidden bg-white border-r border-mega-menu-lines md:flex-1 md:relative lg:flex-none lg:relative lg:bg-[#F9F9F9] ${
                    activeTab === -1
                      ? "md:w-full"
                      : activeSubMenu === -1
                      ? "md:w-1/2 lg:w-1/2"
                      : activeTab === HeaderItems.length - 1
                      ? "md:w-1/2"
                      : "md:w-1/2 lg:w-1/3"
                  }`}
                  style={{
                    transform: "translate(0px, -100%)",
                  }}
                  ref={mainRef}
                >
                  <div className="w-full h-full flex flex-col justify-start items-start">
                    <div className="w-full flex flex-col justify-start items-start px-1 py-4 lg:h-full lg:px-3 xl:px-4 lg:pt-6 xl:pt-8 xl:pb-[22px] lg:pb-[20px] 3xl:px-8 3xl:pt-12 3xl:pb-8">
                      <div className="px-4 pb-6">
                        <div className="text-xs font-neuemontreal-medium lg:leading-[8.7px] leading-[13px] font-medium uppercase text-[#7D828E] opacity-60 3xl:text-[13px] 3xl:leading-none -tracking-[.005em]">
                          Menus /
                        </div>
                      </div>
                      <nav className="w-full flex flex-col justify-start items-start lg:mt-auto">
                        {HeaderItems.map((item, index) => {
                          return (
                            <TabButton
                              key={index}
                              index={index}
                              activeTab={activeTab}
                              setActiveTab={setActiveTab}
                              setActiveSubMenu={setActiveSubMenu}
                              setActiveFinalMenu={setActiveFinalMenu}
                              setShowMain={setShowMain}
                              item={item}
                            />
                          );
                        })}
                      </nav>
                    </div>
                  </div>
                </div>

                <div
                  className={`${
                    activeTab !== -1 ? "lg:block hidden" : "hidden"
                  }  w-full z-50 relative md:flex-1 md:w-1/2 bg-transparent`}
                >
                  <div className="absolute inset-0 w-auto flex-1 overflow-x-hidden overflow-y-scroll scrollbar-none bg-white lg:bg-transparent lg:flex lg:flex-row lg:justify-stretch lg:items-stretch lg:overflow-hidden">
                    <div
                      className={`w-full overflow-hidden flex-1`}
                      style={{
                        transform: "translate(0px, -100%)",
                      }}
                      ref={subRef}
                    >
                      <div className="w-auto h-full bg-white lg:bg-[#F9F9F9] border-mega-menu-lines lg:border-r flex flex-col">
                        <div className="relative w-full h-auto flex flex-col justify-stretch items-start pt-0 pb-0 border-mega-menu-lines  flex-1">
                          <div className="w-full px-5 pt-5 md:mb-3 xl:pt-8 xl:px-8 3xl:pt-12 3xl:px-12">
                            <div className="text-xs leading-none -tracking-[.005em] font-neuemontreal-medium font-medium uppercase text-[#7D828E] 3xl:text-[13px] xl:leading-[8.7px] opacity-60 3xl:leading-none">
                              {activeTab !== -1 &&
                                HeaderItems[activeTab].name + " /"}
                            </div>
                          </div>
                        </div>
                        <div className="relative w-full h-auto flex flex-col justify-stretch items-start pt-0 pb-0 border-mega-menu-lines  flex-1 border-b">
                          <div className="flex-1 w-full flex flex-col justify-stretch items-start px-5 lg:px-4 3xl:px-8 pt-[10px] pb-[10px] lg:pb-[22px] 3xl:pb-8">
                            <div className="mt-auto w-full">
                              {activeTab !== -1 &&
                                HeaderItems[activeTab].subMenu.map(
                                  (item, index) => {
                                    return (
                                      <SubMenu
                                        key={index}
                                        index={index}
                                        activeTab={activeTab}
                                        activeSubMenu={activeSubMenu}
                                        setActiveFinalMenu={setActiveFinalMenu}
                                        setActiveSubMenu={setActiveSubMenu}
                                        item={item}
                                        headerLen={HeaderItems.length - 1}
                                      />
                                    );
                                  }
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        activeTab === HeaderItems.length - 1 ||
                        activeSubMenu === -1
                          ? "hidden"
                          : "w-full overflow-hidden flex-1"
                      }`}
                      style={{
                        transform: "translate(0px, -100%)",
                      }}
                      ref={finalRef}
                    >
                      <div className="w-auto h-full bg-white border-mega-menu-lines xl:border-r flex flex-col">
                        <div className="relative w-full h-auto flex flex-col justify-stretch items-start pt-0 pb-0 border-mega-menu-lines  flex-1 ">
                          <div
                            className={`${
                              activeTab === 2 && activeSubMenu === 2
                                ? "lg:hidden block"
                                : "block"
                            }w-full px-5 pt-5 md:mb-3 lg:pt-8 lg:px-8 3xl:pt-12 3xl:px-12`}
                          >
                            <div className="text-xs -tracking-[.005em] font-neuemontreal-medium leading-none lg:leading-[8.7px] font-medium uppercase text-[#7D828E] opacity-60 3xl:text-[13px] 3xl:leading-none">
                              {activeTab !== -1 &&
                              activeSubMenu !== -1 &&
                              HeaderItems[activeTab].subMenu[activeSubMenu]
                                ? HeaderItems[activeTab].subMenu[activeSubMenu]
                                    .name + " /"
                                : ""}
                            </div>
                          </div>
                          <div
                            className={`${
                              activeTab === 2 && activeSubMenu === 2
                                ? "lg:p-0"
                                : "lg:px-4 3xl:px-8 lg:pb-[22px] 3xl:pb-8"
                            } flex-1 w-full flex flex-col justify-stretch items-start px-5  pt-[10px] pb-[10px]`}
                          >
                            <div className="lg:mt-auto w-full">
                              {activeTab === 2 && activeSubMenu === 2 && (
                                <div className={`flex items-center relative`}>
                                  <Image
                                    src={ClientImage}
                                    alt="client"
                                    className="object-fill w-full h-[507px]"
                                  />
                                  <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
                                    {/* <div className=""></div> */}
                                  </div>
                                </div>
                              )}
                              {activeTab !== -1 &&
                                activeSubMenu !== -1 &&
                                HeaderItems[activeTab].subMenu[activeSubMenu] &&
                                HeaderItems[activeTab].subMenu[
                                  activeSubMenu
                                ].finalMenu.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="flex items-center"
                                    >
                                      <button
                                        className={`${
                                          index === activeFinalMenu
                                            ? "opacity-100"
                                            : "lg:opacity-40 opacity-100"
                                        } final-${index} text-[#121212] -tracking-[.02em] w-full font-neuemontreal-medium flex flex-row justify-start items-center px-4 py-[10px] font-montreal font-medium text-[20px] leading-5 capitalize  3xl:py-4 3xl:text-2xl 3xl:leading-none active:opacity-80`}
                                        onClick={() => {
                                          setActiveFinalMenu(index);
                                        }}
                                        onMouseOver={() => {
                                          handleMouseHoverAnimation(
                                            ".final-" + index,
                                            item,
                                            index
                                          );
                                        }}
                                      >
                                        {item}
                                      </button>
                                      {index === activeFinalMenu ? (
                                        <Image
                                          src={ArrowLeftTopImage}
                                          alt="arrow"
                                        />
                                      ) : null}
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`lg:hidden ${
                    activeTab === -1
                      ? "hidden"
                      : showMain
                      ? "md:block hidden"
                      : "block"
                  } w-full z-50 relative md:flex-1 md:w-1/2 bg-transparent`}
                  ref={mdRef}
                  style={{
                    transform: "translate(0px, -100%)",
                  }}
                >
                  <div className="absolute inset-0 w-auto flex-1 overflow-x-hidden overflow-y-scroll scrollbar-none bg-white">
                    <div className="tab-header md:hidden flex flex-row justify-between items-center px-0 py-0 flex-none bg-white border-b font-montreal font-medium text-sm leading-[14px] text-[#E7E7E7] uppercase">
                      <button
                        className="text-[#121212] px-5 py-3 hover:bg-[#F9F9F9] active:opacity-60"
                        onClick={() => {
                          setShowMain(true);
                        }}
                      >
                        <Image src={ArrowRightImage} alt="arrow-right" />
                      </button>
                      <div className="px-5 py-[14px] font-neuemontreal-medium leading-[14px] text-xs text-[#7D828E] opacity-60 -tracking-[.005em]">
                        {activeTab !== -1 && HeaderItems[activeTab].name} /
                      </div>
                    </div>
                    <div className={`w-full overflow-hidden flex-1`}>
                      {activeTab === HeaderItems.length - 1 ? (
                        <div className="w-auto h-full bg-white border-mega-menu-lines flex flex-col">
                          <div className="relative w-full h-auto flex flex-col justify-stretch items-start pt-0 pb-0 border-mega-menu-lines  flex-1 ">
                            <div className="w-full px-5 pt-5 pb-1 md:mb-3">
                              <div className="text-xs font-neuemontreal-medium -tracking-[.005em] leading-[13px] font-medium uppercase text-[#7D828E] opacity-60">
                                {activeTab !== -1 &&
                                  HeaderItems[activeTab].name + " /"}
                              </div>
                            </div>
                            <div className="flex-1 w-full flex flex-col justify-stretch items-start pt-[10px] pb-[10px]">
                              <div className="w-full">
                                {activeTab !== -1 &&
                                  HeaderItems[activeTab].subMenu.map(
                                    (item, index) => {
                                      return (
                                        <button
                                          key={index}
                                          className={`text-[#121212] w-full font-neuemontreal-medium flex flex-row justify-start items-center px-5 md:py-[10px] py-2 font-montreal font-medium text-base leading-5 capitalize   hover:bg-[#F9F9F9] -tracking-[.02em] active:opacity-80`}
                                          onClick={() => {
                                            setActiveSubMenu(index);
                                            setActiveFinalMenu(0);
                                          }}
                                        >
                                          {item.name}
                                        </button>
                                      );
                                    }
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        activeTab !== -1 &&
                        HeaderItems[activeTab].subMenu.map((item, index) => {
                          return (
                            <div
                              className={`${
                                index ===
                                HeaderItems[activeTab].subMenu.length - 1
                                  ? ""
                                  : "border-b"
                              } w-auto h-full bg-white border-mega-menu-lines flex flex-col`}
                              key={index}
                            >
                              <div className="relative w-full h-auto flex flex-col justify-stretch items-start pt-0 pb-0 border-mega-menu-lines  flex-1 ">
                                <div className="w-full px-5 pt-5 pb-1 md:mb-3">
                                  <div className="text-xs -tracking-[.005em] font-neuemontreal-medium leading-[13px] font-medium uppercase text-[#7D828E] opacity-60">
                                    {item.name + " /"}
                                  </div>
                                </div>
                                <div className="flex-1 w-full flex flex-col justify-stretch items-start pt-[10px] pb-[10px]">
                                  <div className="w-full">
                                    {item.finalMenu.map((final, finalIndex) => {
                                      return (
                                        <button
                                          key={finalIndex}
                                          className={`text-[#121212] -tracking-[.02em] w-full font-neuemontreal-medium flex flex-row justify-start items-center px-5 md:py-[10px] py-2 font-montreal font-medium text-base leading-5 capitalize hover:bg-[#F9F9F9] active:opacity-80`}
                                          onClick={() => {
                                            setActiveSubMenu(index);
                                            setActiveFinalMenu(finalIndex);
                                          }}
                                        >
                                          {final}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-screen h-screen"
              onClick={() => {
                extendAnimation();
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
