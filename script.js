// cursor tracker
cursortracker();
function cursortracker() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(".cursor").style.transform = `translate(${
      dets.clientX - 6
    }px, ${dets.clientY - 6}px)`;
    document.querySelector(".cursor-tracker-2").style.transform = `translate(${
      dets.clientX - 150
    }px, ${dets.clientY - 150}px)`;
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

gsap.from(".page-4", {
  delay: 5,
  scrollTrigger: {
    trigger: ".skills-sec",
    scroller: ".main",
    start: "top 80%",
    onEnter: function () {
      skillsProgress();
    },
  },
});

gsap.to(".loading-screen", {
  delay: 2,
  y: "-100vh",
  duration: 0.5,
});

gsap.to(".loader", {
  rotate: "720deg",
  duration: 2
})

setTimeout(()=>{
  gsap.to(".loader", {
    rotate: "0deg",
    duration: 2
  })
},2000)

gsap.from(".page-1", {
  opacity: 0,
  delay: 2.5,
  duration: 0.5,
});

// skillsProgress();
function skillsProgress() {
  let percentage = [79, 64, 39, 94, 74, 79, 59];
  let progressBar = document.querySelectorAll(".progress");
  let i = 0;
  progressBar.forEach((bar) => {
    bar.style.transform = `translateX(${percentage[i]}%)`;
    i++;
  });
}

// data and time
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let month, day, hours, minutes, seconds, ampm, formattedDate;
setTime();

setInterval(() => {
  setTime();
}, 60000);

function setTime() {
  currentDate = new Date();
  month = monthNames[currentDate.getMonth()];
  day = String(currentDate.getDate()).padStart(2, "0");
  hours = String(currentDate.getHours() % 12 || 12).padStart(2, "0"); // Convert to 12-hour format
  minutes = String(currentDate.getMinutes()).padStart(2, "0");
  ampm = currentDate.getHours() >= 12 ? "pm" : "am";

  formattedDate = `${month} ${day} ${hours}:${minutes}${ampm}`;
  document.querySelector(".time").innerHTML = "// " + formattedDate;
}

// project
document.querySelector(".project-1").addEventListener("click", function () {
  const linkURL =
    "https://abhisheknavgan95.github.io/Cynthia-Ugwu-Portfolio-Clone/";
  window.location.href = linkURL;
});

document.querySelector(".project-2").addEventListener("click", function () {
  const linkURL = "https://abhisheknavgan95.github.io/Logitech-Clone/";
  window.location.href = linkURL;
});

document.querySelector(".project-3").addEventListener("click", function () {
  const linkURL = "https://abhisheknavgan95.github.io/Usability-Hub/";
  window.location.href = linkURL;
});

document.querySelector(".project-4").addEventListener("click", function () {
  const linkURL = "https://abhisheknavgan95.github.io/BookMyShow-Clone/";
  window.location.href = linkURL;
});
document.querySelector(".project-5").addEventListener("click", function () {
  const linkURL = "https://pass-generator-by-an.netlify.app/";
  window.location.href = linkURL;
});
document.querySelector(".project-6").addEventListener("click", function () {
  const linkURL = "https://awsome-to-do.netlify.app/";
  window.location.href = linkURL;
});

document.querySelector(".project-7").addEventListener("click", function () {
  const linkURL = "https://currency-converter-an.netlify.app/";
  window.location.href = linkURL;
});

document.querySelector(".project-8").addEventListener("click", function () {
  const linkURL = "https://abhisheknavgan95.github.io/Spacify-clone/";
  window.location.href = linkURL;
});

clickpreview();
function clickpreview() {
  let click;
  document.querySelectorAll(".project").forEach((e) => {
    e.addEventListener("mouseenter", () => {
      gsap.to(e, {
        scale: 1.025,
        duration: 0.25,
      });
    });
    e.addEventListener("mouseleave", () => {
      gsap.to(e, {
        scale: 1,
        duration: 0.25,
      });
    });
  });
}

// dark mode
document.querySelector(".dark-mode-btn").addEventListener("click", () => {
  load();
});

let load = () => {
  gsap.to(".loading-screen", {
    y: "0vh",
    duration: 0.5,
  });

  gsap.to(".loader", {
    rotate: "360deg",
    duration: 1,
    delay: .5
  });

  setTimeout(() => {
    gsap.to(".loader", {
      rotate: "0deg",
    });
  }, 1500);

  setTimeout(() => {
    gsap.to(".loading-screen", {
      y: "-100vh",
      duration: 0.5,
    });
    document.body.classList.toggle("dark");
  }, 1000);
};

// gsap
gsap.from(".page-2-heading", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page-2-heading",
    scroller: ".main",
    start: "top 70%",
  },
});
gsap.from(".project", {
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".project",
    scroller: ".main",
    start: "top 70%",
  },
});
gsap.from(".skill", {
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".skill",
    scroller: ".main",
    start: "top 70%",
  },
});

gsap.from(".page-3-heading", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page-3-heading",
    scroller: ".main",
    start: "top 70%",
  },
});

gsap.from(".page-4-heading", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page-4-heading",
    scroller: ".main",
    start: "top 70%",
  },
});

gsap.from(".about-sec", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-sec",
    scroller: ".main",
    start: "top 70%",
  },
});

gsap.from(".page-5-heading", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page-5-heading",
    scroller: ".main",
    start: "top 70%",
  },
});

gsap.from(".page-5-container", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page-5-container",
    scroller: ".main",
    start: "top 70%",
  },
});

gsap.from(".page-6-heading", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page-6-heading",
    scroller: ".main",
    start: "top 70%",
  },
});

gsap.from(".page-6-msg", {
  opacity: 0,
  duration: 1,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".page-6-msg",
    scroller: ".main",
  },
});

gsap.from(".footer", {
  opacity: 0,
  duration: 1,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".footer",
    scroller: ".main",
  },
});
