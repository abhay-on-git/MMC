
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

// Copyright dateupdation code
document.querySelector("#currentYear").innerText = new Date().getFullYear();

function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green}, ${blue})`;
}

function setRandomColor() {
    let bookingsOpen = document.querySelector(".bookings-in h2");
    let color = generateRandomColor();
    if (color === "#000") {
        bookingsOpen.style.color = "#fff";
    } else {
        bookingsOpen.style.color = color;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(setRandomColor, 1000);
    setRandomColor();
});

const pg1H1s = document.querySelectorAll(".pg1-c h1");

var tl = gsap.timeline();
pg1H1s.forEach((h1, index) => {
    gsap.from(h1, {
        y: "100%",
        duration: 1,
        ease: "ease",
    }, index); 
});

gsap.from([".pg2inL h1",".pg2inL p",".pg2-icon-div"],{
    y:`100px`,
    opacity:0,
    ease:`ease`,
    stagger:1,
    scrollTrigger:{
        trigger:".page2",
        start:"top 40%",
        end:"top top",
        scrub:1,
        scroller:"main",
        // markers:true,
    }
})
gsap.from(".pg2inR",{
    x:`150px`,
    opacity:0,
    ease:`ease`,
    stagger:1,
    scrollTrigger:{
        trigger:".page2",
        start:"top 40%",
        end:"top top",
        scroller:"main",
        scrub:1,
        // markers:true,
    }
})
gsap.from(".pg3-c",{
    x:`-100px`,
    opacity:0,
    ease:`ease`,
    duration:0.5,
    scrollTrigger:{
        trigger:".page3",
        start:"top 30%",
        end:"top top",
        scroller:"main",
        scrub:1,
        // markers:true,
    }
})
gsap.from(".page3>a",{
    y:`100px`,
    opacity:0,
    ease:`ease`,
    delay:0.5,
    scrollTrigger:{
        trigger:".page3",
        start:"top 10%",
        end:"top top",
        scroller:"main",
        scrub:1,
        // markers:true,
    }
})
gsap.from(".pg3-card",{
    y:`100px`,
    opacity:0,
    ease:`ease`,
    stagger:2,
    scrollTrigger:{
        trigger:".page3",
        start:"top 30%",
        end:"top -top",
        scroller:"main",
        scrub:1,
        // markers:true,
    }
})

gsap.from(".pg4-c h2",{
    y:`100px`,
    opacity:0,
    ease:`ease`,
    stagger:1,
    scrollTrigger:{
        trigger:".page4",
        start:"top 30%",
        end:"top top",
        scroller:"main",
        scrub:1,
        // markers:true,
    }
})
gsap.from(".pg4-c h1",{
    y:`100px`,
    opacity:0,
    ease:`ease`,
    stagger:1,
    scrollTrigger:{
        trigger:".page4",
        start:"top 20%",
        end:"top top",
        scroller:"main",
        scrub:1,
        // markers:true,
    }
})

    gsap.from(".pg4-card", {
        y: `100px`,
        opacity: 0,
        ease: `ease`,
        duration: 1,
        stagger:2,
        scrollTrigger: {
            trigger: ".page4",
            start: `top 30%`,
            end: `top -10%`,
            scroller:"main",
            scrub: 1,
            // markers: true,  
        },
    });
