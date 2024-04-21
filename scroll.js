document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('nav a[href^="#"]');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Show/hide scroll-to-top button
    const scrollButton = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 200) {
        scrollButton.classList.add('show');
      } else {
        scrollButton.classList.remove('show');
      }
    });

    scrollButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
});
