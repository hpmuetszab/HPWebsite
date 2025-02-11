// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Animate Columns (Fade-in)
gsap.from(".col-md-4", {
  y: 20,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".col-md-4",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});
gsap.from(".underline", {
  scaleX: 0,
  opacity: 0,
  transformOrigin: "left center",
  duration: 1,
  scrollTrigger: {
    trigger: ".underline",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});

// Animate Images in Hult Section
gsap.from(".hult-section img", {
  y: 70,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".hult-section img",
    start: "top 85%",
    toggleActions: "play none none none"
  }
});

// Animate Hult Content
gsap.from(".hult-content", {
  y: -70,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".hult-content",
    start: "top 85%",
    toggleActions: "play none none none"
  }
});

// Animate Home Section Headings
gsap.from("#home h2, #home h1", {
  y:20,
  opacity: 0,
  duration: 1,
  // delay: 0.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#home h1",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});

// Animate Achievement Boxes
gsap.from(".achievement-box", {
  y: 10,
  scale: 0,
  opacity: 0,
  duration: 0.3,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".achievement-box",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});


gsap.from(".sponsor-section", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".sponsor-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

//read more functionality
let txtContainer=document.querySelectorAll('.cont')
let readMoreTxt=document.querySelectorAll('.read-more-txt');
let readMoreBtn=document.querySelectorAll('.read-more-btn');
  Array.from(readMoreBtn).forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{

        readMoreTxt[idx].classList.toggle('d-none')

        if(btn.textContent.includes('Read more')){
        btn.textContent='Show less'
        txtContainer[idx].appendChild(btn)
        }
        else
        btn.textContent='Read more'



    })
  })
