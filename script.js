document.querySelector('.btn-primary').addEventListener('click', function() {    
    alert('You will now be redirected to the official Bugatti website!');
  });
  
document.getElementById('websiteButton').addEventListener('click', function() {
    
    window.open('https://www.bugatti.com/', '_blank');
  });
  // Smooth scrolling with custom duration
// Smooth scrolling with custom duration and easing function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const topOffset = targetElement.getBoundingClientRect().top;
            const scrollDuration = 1000; // Adjust the duration (in milliseconds) as desired
            const start = window.pageYOffset;
            const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

            function scroll() {
                const now = 'now' in window.performance ? performance.now() : new Date().getTime();
                const time = Math.min(1, ((now - startTime) / scrollDuration));
                const easedTime = easeInOutQuad(time);
                window.scroll(0, start + ((topOffset - start) * easedTime));

                if (time < 1) requestAnimationFrame(scroll);
            }

            function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - (2 * t)) * t;
            }

            scroll();
        }
    });
});

