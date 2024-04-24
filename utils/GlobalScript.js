import { gsap } from "/gsap-bonus/package/dist/gsap.js";

export const scrambleText = (selector, text) => {
  gsap.to(selector, {
    scrambleText: {
      text: text,
      chars: "lowerCase",
      revealDelay: 0.2,
      duration: 0,
      tweenLength: false,
    },
  });
};
