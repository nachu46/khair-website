// shared.js — injects nav, footer, whatsapp button, and scroll reveals

const NAV_HTML = `
<nav id="main-nav">
  <a href="index.html" class="logo">Khair<span>.</span>IT</a>
  <ul class="nav-links">
    <li><a href="index.html" data-page="index">Home</a></li>
    <li><a href="services.html" data-page="services">Services</a></li>
    <li><a href="about.html" data-page="about">About</a></li>
    <li><a href="portfolio.html" data-page="portfolio">Portfolio</a></li>
    <li><a href="contact.html" data-page="contact">Contact</a></li>
  </ul>
  <a href="https://khair-billing-software.vercel.app" target="_blank" class="nav-cta" style="background:var(--bg); border:1px solid var(--border); color:var(--text); margin-right:12px;">Open POS →</a>
  <a href="contact.html" class="nav-cta">Let's Talk</a>
  <div class="hamburger" id="hamburger">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu">
  <a href="index.html">Home</a>
  <a href="services.html">Services</a>
  <a href="about.html">About</a>
  <a href="portfolio.html">Portfolio</a>
  <a href="contact.html">Contact</a>
  <a href="https://khair-billing-software.vercel.app" target="_blank" style="color:var(--accent);">Open POS →</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" class="logo">Khair<span>.</span>IT</a>
      <p>Your trusted digital growth partner. We build, brand, and market businesses that win online.</p>
      <div class="social-row" style="margin-top:20px;">
        <a href="#" class="social-btn">in</a>
        <a href="#" class="social-btn">ig</a>
        <a href="#" class="social-btn">fb</a>
        <a href="#" class="social-btn">yt</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="services.html#digital-marketing">Digital Marketing</a></li>
        <li><a href="services.html#shopify">Shopify Development</a></li>
        <li><a href="services.html#web-dev">Web Development</a></li>
        <li><a href="services.html#pos">Software & POS</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="portfolio.html">Our Work</a></li>
        <li><a href="index.html#process">Process</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:muhammednazuk@gmail.com">muhammednazuk@gmail.com</a></li>
        <li><a href="tel:+919061627236">+91 90616 27236</a></li>
        <li><a href="#">Kozhikode, Kerala, India</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Khair IT Solutions. All rights reserved.</p>
    <p style="color:var(--muted);font-size:.75rem;">Designed & Built with ❤️ in Kerala</p>
  </div>
</footer>
<a href="https://wa.me/919061627236?text=Hi%20Khair%20IT%20Solutions%2C%20I%27m%20interested%20in%20your%20services!" class="wa-float" target="_blank" rel="noopener" title="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;

const MARQUEE_HTML = `
<div class="marquee-wrap">
  <div class="marquee-track">
    <div class="marquee-item"><span class="marquee-dot"></span>Digital Marketing</div>
    <div class="marquee-item"><span class="marquee-dot"></span>Shopify Development</div>
    <div class="marquee-item"><span class="marquee-dot"></span>Web Development</div>
    <div class="marquee-item"><span class="marquee-dot"></span>Software & POS Systems</div>
    <div class="marquee-item"><span class="marquee-dot"></span>SEO & Growth</div>
    <div class="marquee-item"><span class="marquee-dot"></span>Social Media Marketing</div>
    <div class="marquee-item"><span class="marquee-dot"></span>E-commerce Solutions</div>
    <div class="marquee-item"><span class="marquee-dot"></span>UI/UX Design</div>
    <div class="marquee-item"><span class="marquee-dot"></span>Digital Marketing</div>
    <div class="marquee-item"><span class="marquee-dot"></span>Shopify Development</div>
    <div class="marquee-item"><span class="marquee-dot"></span>Web Development</div>
    <div class="marquee-item"><span class="marquee-dot"></span>Software & POS Systems</div>
    <div class="marquee-item"><span class="marquee-dot"></span>SEO & Growth</div>
    <div class="marquee-item"><span class="marquee-dot"></span>Social Media Marketing</div>
    <div class="marquee-item"><span class="marquee-dot"></span>E-commerce Solutions</div>
    <div class="marquee-item"><span class="marquee-dot"></span>UI/UX Design</div>
  </div>
</div>`;

function initShared(activePage) {
  // inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // inject footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // active nav link
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === activePage) a.classList.add('active');
  });

  // scroll nav
  window.addEventListener('scroll', () => {
    document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 60);
  });

  // hamburger
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-menu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open'); mob.classList.remove('open');
  }));

  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => obs.observe(el));
}
