// =========================================
// TANVIR TRADERS — PORTAL SCRIPT
// =========================================

document.addEventListener('DOMContentLoaded', () => {

  // -----------------------------------------
  // Navbar scroll shadow
  // -----------------------------------------
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.10)';
    } else {
      navbar.style.boxShadow = '0 1px 12px rgba(0,0,0,0.05)';
    }
  }, { passive: true });

  // -----------------------------------------
  // Card click ripple effect
  // -----------------------------------------
  document.querySelectorAll('.portal-card').forEach(card => {
    card.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.3);
        width: 200px; height: 200px;
        transform: scale(0);
        animation: rippleAnim 0.5s linear;
        left: ${e.clientX - card.getBoundingClientRect().left - 100}px;
        top: ${e.clientY - card.getBoundingClientRect().top - 100}px;
        pointer-events: none;
        z-index: 10;
      `;
      card.appendChild(ripple);
      setTimeout(() => ripple.remove(), 550);
    });
  });

  // Add ripple keyframes dynamically
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes rippleAnim {
        to { transform: scale(4); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  // -----------------------------------------
  // Intersection Observer — fade-in on scroll
  // -----------------------------------------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stat-item').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
    observer.observe(el);
  });

  // -----------------------------------------
  // FAQ Accordion
  // -----------------------------------------
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isOpen = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('active', !isOpen);
      button.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });

  // -----------------------------------------
  // Console greeting
  // -----------------------------------------
  console.log('%c তানভীর ট্রেডার্স পোর্টাল ✅ ', 'background:#f97316;color:#fff;font-size:14px;padding:6px 12px;border-radius:6px;font-weight:700;');
  console.log('%c Akij: https://tanvir-traders-akij.vercel.app/', 'color:#ea580c;font-size:12px;');
  console.log('%c Fresh: https://tanvir-traders-fresh.vercel.app/', 'color:#0284c7;font-size:12px;');

});
