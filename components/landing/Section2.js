import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Section2_Helper } from "./Helper";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section2() {
  const cardsRef = useRef([]);
  const lastCardRef = useRef(null);

  const startAnimation = () => {
    const lastCardX = lastCardRef.current.offsetLeft;

    gsap.to(cardsRef.current, {
      x: (i) => {
        return lastCardX - (cardsRef.current[i].offsetLeft);
      },
      scale: 1.2,
      duration: 0.5,
      ease: 'power2.inOut',
      stagger: {
        amount: 0.4,
        from: "end"
      }
    });

    gsap.to(lastCardRef.current, {
      scale: 1.2,
      duration: 0.5,
      ease: 'power2.inOut'
    });
  };

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, 4);
  }, []);
  const { images, bgImages } = Section2_Helper();

  const [scrollState, setScrollState] = useState(-1);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [scrollStart, setScrollStart] = useState(false);
  const [bgImage, setBgImage] = useState(0);

  const xlRef = useRef(null);
  const mdRef = useRef(null);

  const handleScroll = (ref) => (event) => {
    const { scrollLeft } = ref.current;
    if (event.deltaY > 0) {
      if (scrollState === scrollLeft && scrollState > 0) {
        setScrollEnd(true);
      } else {
        setScrollState(scrollLeft);
        ref.current.scrollLeft += event.deltaY;
        setScrollStart(false);
        startAnimation();
      }
    } else {
      if (scrollState === scrollLeft && scrollState === 0) {
        setScrollStart(true);
      } else {
        setScrollState(scrollLeft);
        ref.current.scrollLeft += event.deltaY;
        setScrollEnd(false);
      }
    }
  };

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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };
    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };
    disableScroll();

    ScrollTrigger.create({
      trigger: ".section2",
      start: "top center",
      onEnter: () => {
        disableScroll();
        const tl = gsap.timeline({
          paused: true,
          onComplete: enableScroll,
        });
        tl.play();
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className={`section2 ${scrollEnd ? "hidden" : "block"}`}>
        <div
          className="lg:flex hidden 3xl:max-w-full items-center justify-between overflow-x-hidden w-screen h-screen 3xl:p-6 xl:p-4 bg-[#F9F9F9]"
          ref={xlRef}
          onWheel={handleScroll(xlRef)}
        >
          <div className="flex flex-col font-normal w-1/3 text-[#121212] 3xl:text-[80px] 3xl:leading-[67px] lg:text-[calc(48px+1.5vw)] lg:leading-[calc(40px+1.5vw)] -tracking-[0.03em]">
            <span className="font-neuemontreal-book">The most</span>
            <span className="font-neuemontreal-book">comprehensive</span>
            <span className="font-dentoncondensedtest font-thin	">
              analysis of your face
            </span>
          </div>
          <div className="3xl:py-[108px] xl:py-[88px] 3xl:gap-[42px] xl:gap-[35px] flex w-2/3">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="3xl:w-[284px] 3xl:h-[403px] xl:w-[234px] xl:h-[331px] border border-[#7D828E26]"
              />
            ))}
          </div>
        </div>
        <div
          className="lg:hidden flex flex-col w-screen h-screen items-center justify-center bg-[#F9F9F9] gap-6"
          onWheel={handleScroll(mdRef)}
        >
          <div className="flex flex-col font-normal text-center text-[#121212] md:text-[48px] text-[42px] md:leading-[40px] leading-[35px] -tracking-[0.03em]">
            <span className="font-neuemontreal-book">The most</span>
            <span className="font-neuemontreal-book">comprehensive</span>
            <span className="font-dentoncondensedtest font-thin	">
              analysis of your face
            </span>
          </div>
          <div
            className="md:pt-[88px] md:gap-[35px] gap-[38px] flex w-screen overflow-x-hidden md:mt-0 mt-[80px]"
            ref={mdRef}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="md:w-[234px] md:h-[331px] w-[256px] h-[363px] border border-[#7D828E26]"
              />
            ))}
          </div>
        </div>
      </div>
      <div className={`section2 ${scrollEnd ? "block" : "hidden"}`}>
        <div className="xl:flex relative hidden 3xl:max-w-full items-center w-screen h-screen bg-[#F9F9F9]">
          <Image src={bgImages[bgImage]} alt={`bg`} className="w-full h-full" />
          <div className="absolute w-full h-full flex">
            <div className="w-1/2 h-screen">
              <div className="flex flex-col 3xl:gap-8 gap-[21px] h-full justify-center pl-[18%]">
                <div className="flex flex-col 3xl:text-[80px] text-[#121212] font-normal 3xl:leading-[72px] leading-[43px] text-[48px] -tracking-[0.03em]">
                  <span className="font-neuemontreal-book">
                    Documented into
                  </span>
                  <span className="font-neuemontreal-book">
                    200 pages{" "}
                    <span className="font-dentoncondensedtest font-thin">
                      report of you
                    </span>
                  </span>
                </div>
                <div className="flex flex-col text-[#121212] font-neuemontreal-book font-normal 3xl:text-[24px] text-[16px] 3xl:leading-[29px] leading-[19px] -tracking-[0.015]">
                  <span>Professional facial assessments and clear facial </span>
                  <span>changes visualisation. </span>
                </div>
                <div className="bg-[#809AA3] 3xl:pr-4 3xl:pl-6 pr-[11px] pl-4 flex items-center justify-between 3xl:w-[312px] w-[208px] 3xl:h-[60px] h-[40px]">
                  <span className="font-neuemontreal-book font-medium 3xl:text-[16px] text-[14px] 3xl:leading-[20px] leading-[13px] text-[#FFFFFF] capitalize -tracking-[0.01em]">
                    ALL REPORTS
                  </span>
                  <div className="h-8 border-l border-l-[#FFFFFF] border-opacity-15 flex items-center pl-4">
                    <svg
                      width="21"
                      height="14"
                      viewBox="0 0 21 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="3xl:w-[21px] 3xl:h-[14px] w-3 h-2"
                    >
                      <path
                        d="M12.6718 0.625L19 6.67936L12.6718 12.7337"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M19 6.67969H0.0154662"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-screen flex items-center">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  ref={addToRefs}
                  style={{
                    position: 'absolute',
                    marginLeft: "-90px",
                    left: `${index * 110}px`,
                  }}
                  alt={`Image ${index + 1}`}
                  className="3xl:w-[284px] 3xl:h-[403px] xl:w-[234px] xl:h-[331px] border border-[#7D828E26]"
                />
              ))}
              <div className="3xl:py-[160px] py-[106px] 3xl:w-[423px] w-[281px] ml-[20%]">
                <Image
                  src={images[12]}
                  ref={lastCardRef}
                  alt="image"
                  className="3xl:h-[598px] h-[398px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:hidden flex  items-center w-screen h-screen bg-[#F9F9F9]">
          <Image
            src={bgImages[bgImage]}
            alt={`bg`}
            className="w-full h-full md:block hidden"
          />
          <div className="absolute w-full h-full flex flex-col">
            <div className="w-full md:mt-[174px] mt-[125px]">
              <div className="flex flex-col md:gap-[21px] gap-4 h-full items-center">
                <div className="md:flex hidden flex-col text-center text-[#121212] font-normal md:leading-[43px] md:text-[48px] text-[42px] leading-[37.8px] -tracking-[0.03em]">
                  <span className="font-neuemontreal-book">
                    Documented into
                  </span>
                  <span className="font-neuemontreal-book">
                    200 pages{" "}
                    <span className="font-dentoncondensedtest font-thin">
                      report of you
                    </span>
                  </span>
                </div>
                <div className="md:hidden flex flex-col text-center text-[#121212] font-normal md:leading-[43px] md:text-[48px] text-[42px] leading-[37.8px] -tracking-[0.03em]">
                  <span className="font-neuemontreal-book">Documented</span>
                  <span className="font-neuemontreal-book">into 200 pages</span>
                  <span className="font-dentoncondensedtest font-thin">
                    report of you
                  </span>
                </div>
                <div className="flex flex-col md:text-[#121212] text-[#42464B] text-center font-neuemontreal-book font-normal text-[16px] leading-[19px] -tracking-[0.015]">
                  <span>Professional facial assessments and clear facial </span>
                  <span>changes visualisation. </span>
                </div>
                <div className="md:flex hidden bg-[#809AA3] pr-[11px] pl-4 items-center justify-between w-[208px] h-[40px]">
                  <span className="font-neuemontreal-book font-medium text-[10px] leading-[13px] text-[#FFFFFF] capitalize -tracking-[0.01em]">
                    ALL REPORTS
                  </span>
                  <div className="h-[21px] border-l border-l-[#FFFFFF] border-opacity-15 flex items-center pl-[11px]">
                    <svg
                      width="21"
                      height="14"
                      viewBox="0 0 21 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-2"
                    >
                      <path
                        d="M12.6718 0.625L19 6.67936L12.6718 12.7337"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M19 6.67969H0.0154662"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-[50px]">
              <Image
                src={images[12]}
                alt="image"
                className="w-[258px] h-[365px]"
              />
            </div>
            <div className="md:hidden block px-4 mt-[45px]">
              <div className="flex bg-[#809AA3] pr-[11px] pl-4 items-center justify-between w-full h-[40px]">
                <span className="font-neuemontreal-book font-medium text-[14px] leading-[13px] text-[#FFFFFF] capitalize -tracking-[0.01em]">
                  ALL REPORTS
                </span>
                <div className="h-[21px] border-l border-l-[#FFFFFF] border-opacity-15 flex items-center pl-[11px]">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-2"
                  >
                    <path
                      d="M12.6718 0.625L19 6.67936L12.6718 12.7337"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M19 6.67969H0.0154662"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
