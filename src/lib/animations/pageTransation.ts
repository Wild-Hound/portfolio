import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const getBanners = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  return {
    bannerOne,
    bannerTwo,
    bannerThree,
    bannerFour,
  };
};

export const instantAnimateOut = () => {
  const { bannerOne, bannerTwo, bannerThree, bannerFour } = getBanners();

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    bannerOne.style.transform = "translate(0%, 100%)";
    bannerTwo.style.transform = "translate(0%, 100%)";
    bannerThree.style.transform = "translate(0%, 100%)";
    bannerFour.style.transform = "translate(0%, 100%)";
  }
};

export const animatePageIn = () => {
  const { bannerOne, bannerTwo, bannerThree, bannerFour } = getBanners();

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const { bannerOne, bannerTwo, bannerThree, bannerFour } = getBanners();

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
