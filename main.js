// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);
reveals.forEach(el => observer.observe(el));

// Mobile nav toggle
function toggleMenu() {
  const m = document.getElementById('navMobile');
  m.classList.toggle('open');
}

// Close mobile nav on link click
document.querySelectorAll('.nav-mobile a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navMobile').classList.remove('open');
  });
});
