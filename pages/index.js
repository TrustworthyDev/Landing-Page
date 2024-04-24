import Header from "@/components/header/Header";
import Section1 from "@/components/landing/Section1";
import Section2 from "@/components/landing/Section2";
import Section3 from "@/components/landing/Section3";
import Section4 from "@/components/landing/Section4";
import Section5 from "@/components/landing/Section5";
import Section6 from "@/components/landing/Section6";
import Section7 from "@/components/landing/Section7";
import Section8 from "@/components/landing/Section8";
import Section9 from "@/components/landing/Section9";
import { gsap } from "gsap";
import ScrollSmoother from "/gsap-bonus/package/dist/ScrollSmoother";
import ScrollTrigger from "/gsap-bonus/package/dist/ScrollTrigger";
import ScrambleTextPlugin from "/gsap-bonus/package/dist/ScrambleTextPlugin";
import ScrollToPlugin from "/gsap-bonus/package/dist/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  ScrambleTextPlugin,
  ScrollToPlugin
);

// let sections = gasp.utils.toArray(".panel");

export default function Home() {
  return (
    <div className="landing overflow-x-hidden">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </div>
  );
}
