document.addEventListener('DOMContentLoaded', () => {
    // Animations for Hero Section (Already Added)
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

    // Animations for Men’s, Women’s, and Accessories Sections
    gsap.from("#men", { 
        duration: 2, 
        opacity: 0, 
        y: 50, 
        ease: "power3.out",
        delay: 1
    });

    gsap.from("#women", { 
        duration: 2, 
        opacity: 0, 
        y: 50, 
        ease: "power3.out",
        delay: 1.5
    });

    gsap.from("#accessories", { 
        duration: 2, 
        opacity: 0, 
        y: 50, 
        ease: "power3.out",
        delay: 2
    });
});
