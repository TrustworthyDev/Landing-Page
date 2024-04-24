import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Section1_Image from "@/assets/images/landing/section1/section1.png";
import Top_Left from "@/assets/images/landing/section1/top-left.svg";
import Bottom_Right from "@/assets/images/landing/section1/bottom-right.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };
    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };
    // disableScroll();

    ScrollTrigger.create({
      trigger: ".section1",
      start: "top center",
      onEnter: () => {
        disableScroll();

        const tl = gsap.timeline({
          paused: true,
          onComplete: enableScroll,
        });

        tl.to(".section1", { opacity: 1, ease: "power3.out", duration: 2 })

          .from(
            ".section1-title",
            { y: 50, ease: "power3.out", duration: 2 },
            "-=2"
          )
          .from(
            "#mask",
            {
              scale: 0,
              ease: "power3.out",
              duration: 2,
              transformOrigin: "center center",
            },
            "-=2"
          )
          .from(
            ".top-left",
            {
              css: { top: "50%", left: "50%" },
              ease: "power3.out",
              duration: 2,
            },
            "-=2"
          )
          .from(
            ".bottom-right",
            {
              css: { top: "50%", left: "50%" },
              ease: "power3.out",
              duration: 2,
            },
            "-=2"
          )
          .from(
            ".section1-image-title",
            {
              css: { top: "50%", left: "50%", transform: "scale(0)" },
              scale: 0,
              ease: "power3.out",
              duration: 2,
            },
            "-=2"
          )
          .from(
            ".section1-image-content",
            {
              css: { top: "35%", left: "25%", transform: "scale(0)" },
              transformOrigin: "center center",
              ease: "power3.out",
              duration: 2,
            },
            "-=2"
          )
          .from("#rect", { opacity: 0, ease: "power3.out", duration: 1 }, "+=0")
          .set(
            ["#topborder", "#bottomborder", "#leftborder", "#rightborder"],
            {
              opacity: 1,
            },
            "-=1"
          )
          .from(
            ["#topborder", "#leftborder"],
            {
              scale: 0,
              ease: "power3.out",
              duration: 2,
            },
            "-=1"
          )
          .from(
            ["#bottomborder", "#rightborder"],
            {
              scale: 0,
              ease: "power3.out",
              duration: 2,
              transformOrigin: "right right",
            },
            "-=2"
          );

        tl.play();
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        className="lg:flex-row md:flex-col-reverse section1 flex flex-col min-w-[375px]"
        style={{ opacity: 0 }}
      >
        <div className="w-full 3xl:mt-[94px] xl:mt-[5.3125vw] flex lg:flex-col md:flex-row flex-col justify-between gap-8 md:gap-0 lg:p-0 md:p-6 pt-[150px] px-3 pb-[28px]">
          <div className="flex flex-col justify-between h-1/2 lg:w-full md:w-1/2 w-full">
            <div className="xl:block hidden max-w-[883px] w-full h-[1px] bg-[#7D828E26]"></div>
            <div className="section1-title mt-auto 3xl:pl-[25px] lg:pl-[1.25vw] md:py-6 flex flex-col 3xl:gap-6 md:gap-4 gap-3 xl:w-[80%] w-full 3xl:min-w-[780px] xl:min-w-[520px]">
              <div className="lg:block hidden font-normal font-neuemontreal-book text-[#233137] 3xl:text-[100px] xl:text-[5vw] text-[48px] leading-[42px] 3xl:leading-[88px] xl:leading-[4.375vw] -tracking-[0.03em]">
                <span>
                  We help people <br></br>improve
                </span>
                <span className="font-dentoncondensedtest font-thin -tracking-[0.01em]">
                  {" their looks"}
                </span>
              </div>
              <div className="text-center	md:text-left justify-center lg:hidden block font-normal font-neuemontreal-book text-[#233137] 3xl:text-[100px] xl:text-[64px] text-[48px] leading-[42px] 3xl:leading-[88px] xl:leading-[56px] -tracking-[0.03em]">
                <span>
                  We help<br></br> people improve<br></br>
                </span>
                <span className="font-dentoncondensedtest font-thin">
                  {"their looks"}
                </span>
              </div>
              <div className="font-neuemontreal-book text-[#7D828E] font-normal 3xl:text-[24px] md:text-[16px] text-[14px] 3xl:leading-[29px] md:leading-[19px] leading-none -tracking-[0.015em]">
                <span className="lg:block hidden">
                  {"Achieving natural results that preserve your heritage"}
                </span>
                <span className="lg:hidden block text-center	md:text-left">
                  Achieving natural results that preserve<br></br> your heritage
                </span>
              </div>
            </div>
          </div>
          <div className="lg:mb-4 lg:border lg:w-full md:w-1/2 xl:mt-0 w-full lg:border-[#7D828E26] 3xl:pl-[25px] 3xl:p-4 lg:py-3 px-4 flex lg:flex-row flex-col-reverse">
            <div className="bg-[#233137] xl:w-[55%] w-full 3xl:min-w-[522px] 3xl:min-h-[202px] xl:min-w-[352px] lg:w-[60%] xl:min-h-[10.46875vw] min-h-[121px] 3xl:px-[19px] xl:px-[0.9375vw] xl:pb-[0.9375vw] md:p-4 p-3 pt-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between 3xl:pt-[6px] 3xl:pb-[22px] pb-3 items-center">
                  <div className="3xl:text-[44px] xl:text-[1.875vw] lg:text-[18px] text-[24px] font-neuemontreal-book 3xl:leading-[37px] xl:leading-none leading-[28px] font-normal text-[#FFFFFF] -tracking-[0.03em]">
                    {"Free Facial Analysis"}
                  </div>
                  <svg
                    width="24"
                    height="17"
                    viewBox="0 0 24 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="3xl:w-[24px] 3xl:h-[17px] xl:w-[15px] xl:h-[10px] w-5 h-4"
                  >
                    <path
                      d="M15 1L22.5 8.5L15 16"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M22.5 8.49805H0"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="w-full h-[1.5px] bg-[#FFFFFF10]"></div>
              </div>
              <div className="font-neuemontreal-book font-normal 3xl:text-[16px] xl:text-[14px] text-[12px] 3xl:leading-[17px] leading-none -tracking-[0.02em] text-[#FFFFFF40] pt-auto">
                By clicking this button, you agree <br></br> to our Privacy
                Policy and Terms <br></br>of Service.
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-row flex-col p-4 xl:p-0 justify-center xl:min-h-full min-h-[89px] items-center grow 3xl:gap-6 md:gap-4 gap-2 lg:border-none border">
              <div className="font-F37ZagmaMonoTrial-Book 3xl:text-[32px] 3xl:leading-[27px] xl:text-[1.640625vw] md:text-[21px] text-[18px] leading-[15px] xl:leading-[1.40625vw] md:leading-[18px] -tracking-[0.03em] text-[#233137] font-normal">
                {"231,567"}
              </div>
              <div className="text-[#233137] 3xl:text-[20px] font-neuemontreal-book 3xl:leading-[17px] md:text-[13px] text-[12px] leading-[10px] md:leading-[11px] -tracking-[0.03em] font-normal">
                {"Faces Analysed"}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <Image
            src={Section1_Image}
            alt="img"
            className="w-full object-cover h-auto lg:max-h-screen lg:min-h-0 md:min-h-[72.265625vw] sm:min-h-[54vw] min-h-[388px]"
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="relative w-full h-full">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <mask id="myMask">
                    <rect width="100%" height="100%" fill="white" />
                    <rect
                      id="mask"
                      x="21%"
                      y="18%"
                      width="58%"
                      height="64%"
                      fill="black"
                    />
                  </mask>
                </defs>
                <defs>
                  <filter id="blurFilter">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                  </filter>
                </defs>
                <rect
                  x={0}
                  y={0}
                  width="100%"
                  height="100%"
                  fill="#AEC0EE"
                  fillOpacity="0.2"
                  mask="url(#myMask)"
                  filter="url(#blurFilter)"
                />
                <g id="rect">
                  <rect
                    x={0}
                    y="18%"
                    width="100%"
                    height={0.5}
                    opacity={0.4}
                    stroke="white"
                    strokeWidth="1.07008"
                    strokeDasharray="4.28 2.14"
                  />
                  <rect
                    x={0}
                    y="82%"
                    width="100%"
                    height={0.5}
                    opacity={0.4}
                    stroke="white"
                    strokeWidth="1.07008"
                    strokeDasharray="4.28 2.14"
                  />
                  <rect
                    x={"21%"}
                    y={0}
                    width={0.5}
                    height={"100%"}
                    opacity={0.4}
                    stroke="white"
                    strokeWidth="1.07008"
                    strokeDasharray="4.28 2.14"
                  />
                  <rect
                    x={"79%"}
                    y={0}
                    width={0.5}
                    height={"100%"}
                    opacity={0.4}
                    stroke="white"
                    strokeWidth="1.07008"
                    strokeDasharray="4.28 2.14"
                  />
                </g>
                <g>
                  <rect
                    x="21%"
                    y="18%"
                    width="58%"
                    height={0.5}
                    stroke="white"
                    opacity={0}
                    strokeWidth="1.07008"
                    id="topborder"
                  />
                  <rect
                    x="21%"
                    y="82%"
                    width="58%"
                    height={0.5}
                    stroke="white"
                    opacity={0}
                    strokeWidth="1.07008"
                    id="bottomborder"
                  />
                  <rect
                    x="21%"
                    y="18%"
                    width={0.5}
                    height="64%"
                    stroke="white"
                    opacity={0}
                    strokeWidth="1.07008"
                    id="leftborder"
                  />
                  <rect
                    x="79%"
                    y="18%"
                    width={0.5}
                    height="64%"
                    stroke="white"
                    opacity={0}
                    strokeWidth="1.07008"
                    id="rightborder"
                  />
                </g>
              </svg>
              <Image
                src={Top_Left}
                alt="img"
                className="top-left absolute top-[18%] left-[21%]"
              />
              <Image
                src={Bottom_Right}
                alt="img"
                className="bottom-right absolute bottom-[18%] right-[21%]"
              />

              <div className="md:flex hidden justify-between items-center w-full h-fit absolute left-0 bottom-0 text-[#FFFFFF] font-F37ZagmaMonoTrial-Book font-normal 3xl:text-[19.26px] 3xl:leading-[16.95px] xl:text-[12.84px] xl:leading-[11.3px] md:text-[13.24px] md:leading-[11.66px] -tracking-[0.03em] p-6">
                <span className="text-left">
                  PROFESSIONAL<br></br> ASSESTMENTS
                </span>
                <span>&/</span>
                <span className="text-right">
                  ACCURATE <br></br>VISUALISATION
                </span>
              </div>
              <div className="section1-image-title absolute top-[21%] left-[23%] flex flex-col font-neuemontreal-book font-normal 3xl:text-[24px] 3xl:leading-[22px] xl:text-[16px] xl:leading-[14.67px] md:text-[16.5px] md:leading-[15.13px] text-[9.37px] leading-[8.58px] -tracking-[0.015em] text-[#FFFFFF]">
                <span>Facial</span>
                <span>Assessment</span>
                <span>Report</span>
              </div>
              <div className="section1-image-content absolute bottom-[18%] left-[21%] 3xl:p-6 xl:p-4 p-3 w-[58%] h-fit">
                <div className="flex justify-between items-center border-t xl:pt-4 pt-3">
                  <div className="flex flex-col font-neuemontreal-book font-medium -tracking-[0.005em]">
                    <span className="text-[#FFFFFF] leading-none opacity-60 3xl:text-[13px] xl:text-[8.67px] md:text-[8.94px] text-[5.07px]">
                      REGION /
                    </span>
                    <span className="text-[#FFFFFF] opacity-80 3xl:text-[15px] 3xl:leading-[13px] xl:text-[10px] xl:leading-[8.67px] md:text-[10.31px] md:leading-[8.94px] text-[5.85px] leading-[5.07px]">
                      FACE
                    </span>
                  </div>
                  <div className="flex flex-col font-neuemontreal-book font-medium -tracking-[0.005em]">
                    <span className="text-[#FFFFFF] leading-none opacity-60 3xl:text-[13px] xl:text-[8.67px] md:text-[8.94px] text-[5.07px]">
                      PARTS /
                    </span>
                    <span className="text-[#FFFFFF] opacity-80 3xl:text-[15px] 3xl:leading-[13px] xl:text-[10px] xl:leading-[8.67px] md:text-[10.31px] md:leading-[8.94px] text-[5.85px] leading-[5.07px]">
                      24
                    </span>
                  </div>
                  <div className="flex flex-col font-neuemontreal-book font-medium -tracking-[0.005em] text-center">
                    <span className="text-[#FFFFFF] leading-none opacity-60 3xl:text-[13px] xl:text-[8.67px] md:text-[8.94px] text-[5.07px]">
                      PAGES /
                    </span>
                    <span className="text-[#FFFFFF] opacity-80 3xl:text-[15px] 3xl:leading-[13px] xl:text-[10px] xl:leading-[8.67px] md:text-[10.31px] md:leading-[8.94px] text-[5.85px] leading-[5.07px]">
                      180
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
