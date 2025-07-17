import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

export const useSiteScripts = () => {
  useEffect(() => {
    const toggleScrolled = () => {
      const body = document.querySelector('body');
      const header = document.querySelector('#header');
      if (!header) return;
      if (!header.classList.contains('scroll-up-sticky') && !header.classList.contains('sticky-top') && !header.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
    };

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // document.querySelectorAll('.navmenu .toggle-dropdown').forEach(toggle => {
    //   toggle.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     toggle.parentNode.classList.toggle('active');
    //     toggle.parentNode.nextElementSibling?.classList.toggle('dropdown-active');
    //     e.stopImmediatePropagation();
    //   });
    // });

    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => preloader.remove());
    }

    const scrollTop = document.querySelector('.scroll-top');
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    };
    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });

    GLightbox({ selector: '.glightbox' });

    const initSwiper = () => {
      document.querySelectorAll('.init-swiper').forEach(swiperEl => {
        const config = JSON.parse(swiperEl.querySelector('.swiper-config').innerHTML.trim());
        new Swiper(swiperEl, config);
      });
    };
    window.addEventListener('load', initSwiper);

    document.querySelectorAll('.isotope-layout').forEach(isotopeEl => {
      const layout = isotopeEl.dataset.layout || 'masonry';
      const filter = isotopeEl.dataset.defaultFilter || '*';
      const sort = isotopeEl.dataset.sort || 'original-order';

      imagesLoaded(isotopeEl.querySelector('.isotope-container'), () => {
        const iso = new Isotope(isotopeEl.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });

        isotopeEl.querySelectorAll('.isotope-filters li').forEach(btn => {
          btn.addEventListener('click', () => {
            isotopeEl.querySelector('.filter-active').classList.remove('filter-active');
            btn.classList.add('filter-active');
            iso.arrange({ filter: btn.dataset.filter });
            AOS.init();
          });
        });
      });
    });

    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach(el => {
      el.addEventListener('click', () => {
        el.parentNode.classList.toggle('faq-active');
      });
    });

    if (window.location.hash && document.querySelector(window.location.hash)) {
      setTimeout(() => {
        const section = document.querySelector(window.location.hash);
        const offset = parseInt(getComputedStyle(section).scrollMarginTop);
        window.scrollTo({ top: section.offsetTop - offset, behavior: 'smooth' });
      }, 100);
    }

    const navLinks = document.querySelectorAll('.navmenu a');
    
    const navSpy = () => {
      const scrollPos = window.scrollY + 200;
      navLinks.forEach(link => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash);
        if (!section) return;
        if (scrollPos >= section.offsetTop && scrollPos <= section.offsetTop + section.offsetHeight) {
          document.querySelectorAll('.navmenu a.active').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };
    window.addEventListener('load', navSpy);
    document.addEventListener('scroll', navSpy);
  }, []);
};
