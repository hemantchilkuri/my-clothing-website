document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Text Animation
    gsap.from(".hero-text", { 
        duration: 1.5, 
        y: -100, 
        opacity: 0, 
        ease: "power3.out" 
    });

    gsap.from(".hero-desc", { 
        duration: 2, 
        x: -100, 
        opacity: 0, 
        delay: 0.5, 
        ease: "power3.out" 
    });

    gsap.from(".hero-btn", { 
        duration: 2, 
        scale: 0.5, 
        opacity: 0, 
        delay: 1, 
        ease: "elastic.out(1, 0.5)" 
    });

    // Parallax Scrolling Effect for Hero Section
    gsap.to(".hero", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 200,
        ease: "none"
    });
});

