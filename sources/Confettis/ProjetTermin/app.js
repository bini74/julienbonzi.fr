const button_sendSlot = document.querySelector(".slot");
const btnConfettis = document.querySelector(".btn-confettis");
const emojis = ["🎉", "🎊", "🥳", "📧"];

btnConfettis.addEventListener("click", fiesta);

function fiesta() {
  
  if(isTweening()) return;

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    button_sendSlot.appendChild(confetti);
  }

  animateConfettis();
}

function animateConfettis() {
  
  const TLCONF = gsap.timeline();

  TLCONF.to(".slot div", {
    y: "random(-100,100)",
    x: "random(-100,100)",
    z: "random(0,1000)",
    rotation: "random(-90,90)",
    duration: 3,
  })
    .to(".slot div", { autoAlpha: 0, duration: 0.3 }, "-=0.2")
    .add(() => {
      button_sendSlot.innerHTML = "";
    });
}

function isTweening(){
  return gsap.isTweening('.slot div');
}