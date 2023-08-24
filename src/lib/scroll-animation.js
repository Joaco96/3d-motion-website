import gsap from "gsap";

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: !isMobile ? 1.9141962388 : 0.0133237457,
    y: !isMobile ? 2.5861709807 : 10.2168094148,
    z: !isMobile ? 6.9214594112 : 9.415183997,
    scrollTrigger: {
      trigger: ".sound-section",
      //top of the section reaches the bottom of the viewport
      start: "top bottom",
      //top of the section reaches the top of the viewport
      end: "top top",
      scrub: 4,
      immediateRender: false

    },
    onUpdate,
  })
  .to(target, {
    x: !isMobile ? -1 : 0,
    y: !isMobile ? 0 : 0.4,
    z: !isMobile ? 0 : 0,
    scrollTrigger: {
      trigger: ".sound-section",
      //top of the section reaches the bottom of the viewport
      start: "top bottom",
      //top of the section reaches the top of the viewport
      end: "top top",
      scrub: 4,
      immediateRender: false
    },    
  })
  .to('.jumbotron-section', {
    opacity: 0,
    scrollTrigger: {
      trigger: ".sound-section",
      //top of the section reaches the bottom of the viewport
      start: "top bottom",
      //top of the section reaches the top of the viewport
      end: "top top",
      scrub: 2,
      immediateRender: false
    },    
  })
  .to('.sound-section-content', {
    opacity: 1,
    scrollTrigger: {
      trigger: ".sound-section",
      //top of the section reaches the bottom of the viewport
      start: "top bottom",
      //top of the section reaches the top of the viewport
      end: "top top",
      scrub: 4,
      immediateRender: false
    },    
  }).to(position, {
    x: !isMobile ? 6.217658874 : -3.8760543857,
    y: !isMobile ? 1.8181875751 : 6.7158304203,
    z: !isMobile ? 0 : -11.3487944419,
    scrollTrigger: {
      trigger: ".display-section",
      //top of the section reaches the bottom of the viewport
      start: "top bottom",
      //top of the section reaches the top of the viewport
      end: "top top",
      scrub: 4,
      immediateRender: false

    },
    onUpdate,
  })
  .to(target, {
    x: !isMobile ? 0 : 0.1,
    y: !isMobile ? 0.3 : 0.3,
    z: !isMobile ? 0 : 0,
    scrollTrigger: {
      trigger: ".display-section",
      //top of the section reaches the bottom of the viewport
      start: "top bottom",
      //top of the section reaches the top of the viewport
      end: "top top",
      scrub: 4,
      immediateRender: false
    },    
  }).to('.display-section', {
    opacity:1,
    scrollTrigger: {
      trigger: ".display-section",
      //top of the section reaches the bottom of the viewport
      start: "top bottom",
      //top of the section reaches the top of the viewport
      end: "top top",
      scrub: 4,
      immediateRender: false
    },    
  })
};
