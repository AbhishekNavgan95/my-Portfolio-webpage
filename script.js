// cursor tracker
cursortracker();
function cursortracker() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".cursor-tracker"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    document.querySelector(
      ".cursor"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

gsap.from(".intro-heading-1", {
  x: "120%",
  scrollTrigger: {
    trigger: ".intro-heading-1",
    scroller: ".main",
    markers: true,
    scrub: 2,
  },
});

gsap.from(".intro-heading-2", {
  x: "-120%",
  scrollTrigger: {
    trigger: ".intro-heading-2",
    scroller: ".main",
    markers: true,
    scrub: 2,
  },
});

gsap.from(".float", {
  duration: 1,
  opacity: 0,
  delay: 1,
});
