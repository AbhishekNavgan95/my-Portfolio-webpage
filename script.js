// cursor tracker
cursortracker();
function cursortracker() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".cursor"
    ).style.transform = `translate(${dets.clientX-5}px, ${dets.clientY-4}px)`;
  });
}

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  getDirection: true
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