import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Section4_Helper } from "./Helper";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section4() {
  const { images, bgImages } = Section4_Helper();
  const [bgImage, setBgImage] = useState(0);
  const [scrollDir, setScrollDir] = useState("down");
  const [scrollCount, setScrollCount] = useState(0);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1920) {
      setBgImage(0);
    } else if (width >= 1280) {
      setBgImage(1);
    } else {
      setBgImage(2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let isScrolling;

  const scroll = (event) => {
    window.clearTimeout(isScrolling);
    if (event.deltaY > 0) {
      setScrollDir("down");
      isScrolling = setTimeout(() => {
        setScrollCount((prevCount) => Math.min(prevCount + 1, 4));
      }, 66);
    } else {
      setScrollDir("up");
      isScrolling = setTimeout(() => {
        setScrollCount((prevCount) => Math.max(prevCount - 1, 0));
      }, 66);
    }
  };

  useEffect(() => {
    console.log(scrollCount);
    animation();
  }, [scrollCount, scrollDir]);

  const animation = () => {
    if (scrollDir === "down") {
      switch (scrollCount) {
        case 1:
          gsap.to(".section4-title", {
            y: -1000,
            duration: 1,
            yoyo: true,
            scrollTrigger: {
              trigger: ".section4",
            },
          });
          gsap.to(".section4-step-content", {
            opacity: 1,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
              trigger: ".section4",
            },
          });
          gsap.from(".section4-step-content", {
            x: 200,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
              trigger: ".section4",
            },
          });
          gsap.to(".step-by-step-image-" + (4 - scrollCount), {
            css: {
              top: "20%",
              transform: "translateY(-50%)",
              left: "50%",
              transform: "translateX(-50%)",
            },
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
              trigger: ".section4",
            },
          });
          break;
      }
    } else {
      switch (scrollCount) {
        case 0:
          gsap.to(".section4-title", {
            y: 0,
            duration: 1,
            yoyo: true,
            scrollTrigger: {
              trigger: ".section4",
            },
          });
          gsap.to(".section4-step-content", {
            x: 200,
            ease: "power3.out",
            yoyo: true,
            duration: 1,
            scrollTrigger: {
              trigger: ".section4",
            },
          });
          gsap.to(".section4-step-content", {
            opacity: 0,
            ease: "power3.out",
            yoyo: true,
            duration: 1,
            scrollTrigger: {
              trigger: ".section4",
            },
          });
      }
    }
  };

  return (
    <div
      className="section4 relative w-screen h-screen overflow-hidden"
      onWheel={scroll}
    >
      <Image src={bgImages[bgImage]} alt="bg" className="w-full h-full" />
      <div className="absolute top-0 left-0 w-screen h-screen flex p-6">
        <div className="relative w-full h-full">
          <div className="xl:flex hidden mix-blend-hard-light absolute bottom-0 left-0 3xl:w-[390px] xl:w-[260px] text-[#42464B] font-medium font-neuemontreal-medium 3xl:text-[20px] xl:text-[14px] 3xl:leading-[24px] xl:leading-[16.8px] -tracking-[0.005em] items-end">
            Through our facial analysis and precise diagnoses, we provide clear
            and precise recommendations to improve your appearance.
          </div>
          <div className="section4-title absolute md:top-[50%] md:-translate-y-[50%] top-[124px] left-[50%] -translate-x-[50%] flex grow flex-col md:gap-4 gap-3">
            <div className="flex flex-col text-center text-[#233137] 3xl:text-[100px] md:text-[64px] text-[42px] leading-none -tracking-[0.03em]">
              <div className="font-neuemontreal-book text-nowrap">
                Step-by-Step
              </div>
              <div className="font-dentontest-100 italic text-nowrap">
                Aesthetic guidance
              </div>
            </div>
            <div className="xl:hidden block text-center bg-blend-hard-light md:w-[432px] w-[352px] text-[#42464B] font-medium font-neuemontreal-medium text-[14px] leading-[16.8px] -tracking-[0.005em]">
              Through our facial analysis and precise diagnoses, we provide
              clear and precise recommendations to improve your appearance.
            </div>
          </div>
          <div
            className="section4-step-content absolute z-10 top-[56%] left-[60%] text-[#233137] font-neuemontreal-book w-[324px] italic text-[24px] leading-[29px] -tracking-[0.005em]"
            style={{ opacity: 0 }}
          >
            Individuals seeking direct guidance to improve their looks
          </div>
          <div className="absolute top-[39.4%] left-[25%] text-[32px] leading-[35px] -tracking-[0.005em] italic font-F37ZagmaMonoTrial-Book text-[#969CA3]">
            {scrollCount !== 0 && "00" + scrollCount}
          </div>
          <div
            className={`step-by-step-content-${scrollCount} z-10 absolute top-[37%] left-[50%] -translate-x-[50%] text-[#233137] font-neuemontreal-book text-[180px] leading-[151px] -tracking-[0.03em] mix-blend-plus-lighter`}
          >
            <div className={`${scrollCount === 1 ? "block" : "hidden"}`}>
              Guidance
            </div>
            <div className={`${scrollCount === 2 ? "flex" : "hidden"} `}>
              Facial&nbsp;
              <div className="font-dentoncondensedtest">Analysis</div>
            </div>
            <div className={`${scrollCount === 3 ? "flex" : "hidden"} `}>
              Cosmetic&nbsp;
              <div className="font-dentoncondensedtest">Visualisation</div>
            </div>
            <div className={`${scrollCount === 4 ? "flex" : "hidden"} `}>
              <div className="font-dentoncondensedtest">Personalised&nbsp;</div>
              Advice
            </div>
          </div>
          {[...images].reverse().map((item, index) => {
            return (
              <Image
                key={index}
                src={item}
                alt="animation"
                className={`step-by-step-image-${index} absolute 3xl:w-[468px] 3xl:h-[603px] w-[312px] h-[403px] left-[50%] -translate-x-[50%] object-cover`}
                style={{ top: 70 + 50 * (3 - index) + "%" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
