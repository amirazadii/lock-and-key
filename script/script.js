// DOM load event
window.addEventListener("DOMContentLoaded", () => {
    
  const padlock = document.querySelector('.padlock'),
        openPadlock = () => {
            padlock.classList.add('unlock');
        },
        closePadlock = () => {
            padlock.classList.remove('unlock');
        };

  // Click padlock to open/close
  padlock.addEventListener('click', () => 
      padlock.classList.contains('unlock') ? closePadlock() : openPadlock()
  );

});
// فعال کردن ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  gsap.fromTo(section, 
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%', // وقتی 80% سکشن به ویوپورت رسید، اجرا میشه
        toggleActions: 'play none none reverse', // شروع، تکرار، خروج و برگشت
        once: true // فقط یک بار انیمیشن اجرا بشه
      }
    }
  );
});
