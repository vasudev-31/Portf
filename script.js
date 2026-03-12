document.addEventListener("DOMContentLoaded", () => {
  // Check GSAP
  if (typeof gsap === "undefined") {
    console.error("GSAP not loaded");
    return;
  }

  // Register plugin only if available
  const hasScrollTrigger = typeof ScrollTrigger !== "undefined";
  if (hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // -------------------------
  // MOBILE MENU
  // -------------------------
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }

  // -------------------------
  // CUSTOM CURSOR
  // -------------------------
 const cursor = document.querySelector(".cursor");
const cursorCore = document.querySelector(".cursor-core");
const cursorFog = document.querySelector(".cursor-fog");
const isDesktop = window.innerWidth > 860;

if (cursor && cursorCore && cursorFog && isDesktop) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let fogX = mouseX;
  let fogY = mouseY;

  let coreX = mouseX;
  let coreY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  gsap.ticker.add(() => {
    coreX += (mouseX - coreX) * 0.35;
    coreY += (mouseY - coreY) * 0.35;

    fogX += (mouseX - fogX) * 0.12;
    fogY += (mouseY - fogY) * 0.12;

    gsap.set(cursorCore, {
      x: coreX,
      y: coreY
    });

    gsap.set(cursorFog, {
      x: fogX,
      y: fogY
    });
  });

  document.querySelectorAll("a, button, .interactive, .magnetic, .tilt-card, .btn").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
    });
  });
}
  // -------------------------
  // MAGNETIC BUTTONS
  // -------------------------
  document.querySelectorAll(".magnetic").forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(item, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      });
    });
  });

  // -------------------------
  // TILT CARDS
  // -------------------------
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -10;
      const rotateY = ((x / rect.width) - 0.5) * 10;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformOrigin: "center",
        duration: 0.35,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.45,
        ease: "power3.out"
      });
    });
  });

  // -------------------------
  // HERO INTRO
  // -------------------------
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  if (document.querySelector(".header")) {
    heroTl.from(".header", {
      y: -60,
      opacity: 0,
      duration: 0.8
    });
  }

  if (document.querySelectorAll(".reveal-text").length) {
    heroTl.from(
      ".reveal-text",
      {
        y: 70,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9
      },
      "-=0.3"
    );
  }

  if (document.querySelectorAll(".reveal-fade").length) {
    heroTl.from(
      ".reveal-fade",
      {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8
      },
      "-=0.5"
    );
  }

  if (document.querySelector(".hero-card-3d")) {
    heroTl.from(
      ".hero-card-3d",
      {
        x: 60,
        opacity: 0,
        rotateY: 12,
        duration: 1
      },
      "-=0.8"
    );
  }

  if (document.querySelectorAll(".floating-panel").length) {
    heroTl.from(
      ".floating-panel",
      {
        y: 25,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7
      },
      "-=0.7"
    );
  }

  // -------------------------
  // FLOATING OBJECTS
  // -------------------------
  if (document.querySelector(".orb-1")) {
    gsap.to(".orb-1", {
      y: -20,
      x: 15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  if (document.querySelector(".orb-2")) {
    gsap.to(".orb-2", {
      y: -15,
      x: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  if (document.querySelector(".orb-3")) {
    gsap.to(".orb-3", {
      y: 18,
      x: -12,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  if (document.querySelector(".spotlight-1")) {
    gsap.to(".spotlight-1", {
      x: 30,
      y: 20,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  if (document.querySelector(".spotlight-2")) {
    gsap.to(".spotlight-2", {
      x: -35,
      y: -20,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  // -------------------------
  // PARALLAX LAYERS
  // -------------------------
  const layers = document.querySelectorAll(".layer");
  if (layers.length && isDesktop) {
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed || "0.15");

        gsap.to(layer, {
          x: x * speed * 30,
          y: y * speed * 30,
          duration: 0.6,
          ease: "power2.out"
        });
      });
    });
  }

  // -------------------------
  // SCROLL ANIMATIONS
  // -------------------------
  if (hasScrollTrigger) {
    gsap.utils.toArray(".section-heading").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });

    gsap.utils.toArray(".about-card, .skill-card, .project-card, .timeline-item, .contact-item").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });

    if (document.querySelector(".timeline-line") && document.querySelector(".timeline")) {
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none"
      });
    }
  }

  // -------------------------
  // HERO CARD FLOAT
  // -------------------------
  if (document.querySelector(".hero-card-3d")) {
    gsap.to(".hero-card-3d", {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  console.log("All animations initialized");
});





if (document.querySelector(".photo-wrapper")) {
  gsap.to(".photo-wrapper", {
    y: -12,
    duration: 3.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

if (document.querySelector(".photo-glow")) {
  gsap.to(".photo-glow", {
    scale: 1.08,
    duration: 2.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}