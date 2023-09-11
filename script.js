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
    // markers: true,
    onEnter: function () {
      skillsProgress();
    },
  },
});

// skillsProgress();
function skillsProgress() {
  let percentage = [79, 49, 94, 64, 69, 39];
  let progressPercentage = document.querySelectorAll(".progress-percentage");
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
}, 60000); // 60,000

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


movebgelem();
setInterval(movebgelem, 2000);
function movebgelem() {
  let elem1 = document.querySelector(".bg-elem-1");
  let elem2 = document.querySelector(".bg-elem-2");
  let elem3 = document.querySelector(".bg-elem-3");
  let elem4 = document.querySelector(".bg-elem-4");
  let num1, num2;
  num1 = Math.floor(Math.random() * 30);
  num2 = Math.floor(Math.random() * 70);
  num3 = Math.floor(Math.random() * 110);
  num4 = Math.floor(Math.random() * 100);
  elem1.style.transform = `translate(${num3}rem, ${num1}rem)`;
  elem2.style.transform = `translate(${num3}rem, ${num4}rem)`;
  elem3.style.transform = `translate(${num4}rem, ${num2}rem)`;
  elem4.style.transform = `translate(${num4}rem, ${num3}rem)`;
}


// let skills = document.querySelectorAll(".skill");
// let preview = document.querySelector(".preview-sec")
// skills.forEach((e) => {
//   e.addEventListener("mouseover", () => {
//     const skillsTitleElement = e.querySelector('.skills-title');
//     const skillsTitleInnerText = skillsTitleElement.innerText;
//     preview.innerText = skillsTitleInnerText
//     preview.style.transform = "translate(-50%, -50%) scaleX(1)";
//   })
//   e.addEventListener("mouseleave", () => {
//     preview.innerText = "";
//     preview.style.transform = "translate(-50%, -50%) scaleX(0)";
//   })
// })

document.querySelector(".darkmode").addEventListener("click", ()=> {
  document.body.classList.toggle("dark");
})