import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function dismissLoader(loader) {
  if (!loader || reducedMotion()) {
    loader?.remove();
    return Promise.resolve();
  }

  let hasSeen = false;
  try {
    hasSeen = sessionStorage.getItem('seenLoader') === '1';
    if (!hasSeen) sessionStorage.setItem('seenLoader', '1');
  } catch {
    // Storage can be disabled; the intro still works without remembering the visit.
  }

  if (hasSeen) {
    loader.remove();
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let finished = false;
    let fallback;
    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(fallback);
      window.removeEventListener('load', onLoad);
      gsap.set(loader, { transition: 'none', willChange: 'clip-path' });
      gsap.to(loader, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.58,
        ease: 'power3.inOut',
        onComplete: () => {
          loader.remove();
          resolve();
        }
      });
    };
    const onLoad = () => window.setTimeout(finish, 180);

    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad, { once: true });
    fallback = window.setTimeout(finish, 1250);
  });
}

function splitHeroHeading(heading) {
  if (!heading || heading.dataset.split === 'true') return [];
  const label = (heading.innerText || heading.textContent).replace(/\s+/g, ' ').trim();
  heading.setAttribute('aria-label', label);
  heading.dataset.split = 'true';

  const textNodes = [];
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const chars = [];
  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    [...node.textContent].forEach((character) => {
      const span = document.createElement('span');
      span.className = 'hero-char';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = character === ' ' ? '\u00a0' : character;
      fragment.appendChild(span);
      chars.push(span);
    });
    node.replaceWith(fragment);
  });
  return chars;
}

function animateHero(ctx, loader) {
  const hero = document.querySelector('.hero');
  if (!hero) {
    loader?.remove();
    return;
  }

  dismissLoader(loader).then(() => {
    ctx.add(() => {
      const title = hero.querySelector('.cover-title h1');
      const chars = splitHeroHeading(title);
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      timeline.fromTo('.nav__bar',
        { autoAlpha: 0, y: -18 },
        { autoAlpha: 1, y: 0, duration: 0.55 }, 0);
      timeline.fromTo('.cover-title__vol',
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.45 }, 0.06);
      if (chars.length) {
        timeline.fromTo(chars,
          { autoAlpha: 0, yPercent: 115, rotateZ: 4 },
          { autoAlpha: 1, yPercent: 0, rotateZ: 0, duration: 0.72, stagger: 0.026, ease: 'back.out(1.35)' }, 0.08);
      } else {
        timeline.fromTo(title, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.65 }, 0.08);
      }
      timeline.fromTo('.cover-title__meta',
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.42 }, 0.44);
      timeline.fromTo('.hero__intro',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.68 }, 0.28);
      timeline.fromTo('.hero__art',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.65 }, 0.38);
      const heroImage = hero.querySelector('.hero__art img');
      if (heroImage) {
        timeline.fromTo(heroImage,
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', duration: 1.05, ease: 'power3.inOut', clearProps: 'clipPath' }, 0.48);
      }
      timeline.fromTo('.hero__art .bubble, .hero__art .sfx, .hero__art .ctag',
        { autoAlpha: 0, y: 12, rotateZ: -3 },
        { autoAlpha: 1, y: 0, rotateZ: 0, duration: 0.42, stagger: 0.09, ease: 'back.out(1.4)' }, 0.98);
      timeline.fromTo('.hero__stats .stat',
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.09 }, 0.62);
      timeline.fromTo('.hero__ctas .btn',
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.38, stagger: 0.08 }, 0.72);
    });
  });
}

function initPointerInteractions() {
  const media = gsap.matchMedia();
  media.add('(hover: hover) and (pointer: fine)', () => {
    const cleanups = [];
    const heroArt = document.querySelector('.hero__art');

    if (heroArt) {
      gsap.set(heroArt, { transformPerspective: 1150, transformStyle: 'preserve-3d' });
      const rotateX = gsap.quickTo(heroArt, 'rotationX', { duration: 0.55, ease: 'power3.out' });
      const rotateY = gsap.quickTo(heroArt, 'rotationY', { duration: 0.55, ease: 'power3.out' });
      const move = (event) => {
        const rect = heroArt.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        rotateX(gsap.utils.clamp(-2.2, 2.2, y * -4.4));
        rotateY(gsap.utils.clamp(-2.8, 2.8, x * 5.6));
      };
      const reset = () => { rotateX(0); rotateY(0); };
      heroArt.addEventListener('pointermove', move, { passive: true });
      heroArt.addEventListener('pointerleave', reset);
      cleanups.push(() => {
        heroArt.removeEventListener('pointermove', move);
        heroArt.removeEventListener('pointerleave', reset);
      });
    }

    document.querySelectorAll('.project').forEach((card) => {
      card.dataset.tiltReady = 'true';
      gsap.set(card, { transformPerspective: 1000, transformStyle: 'preserve-3d' });
      const rotateX = gsap.quickTo(card, 'rotationX', { duration: 0.38, ease: 'power3.out' });
      const rotateY = gsap.quickTo(card, 'rotationY', { duration: 0.38, ease: 'power3.out' });
      const move = (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        rotateX(gsap.utils.clamp(-2.6, 2.6, y * -5.2));
        rotateY(gsap.utils.clamp(-3.2, 3.2, x * 6.4));
      };
      const reset = () => { rotateX(0); rotateY(0); };
      card.addEventListener('pointermove', move, { passive: true });
      card.addEventListener('pointerleave', reset);
      cleanups.push(() => {
        card.removeEventListener('pointermove', move);
        card.removeEventListener('pointerleave', reset);
        delete card.dataset.tiltReady;
      });
    });

    document.querySelectorAll('.btn').forEach((button) => {
      button.classList.add('is-magnetic');
      const xTo = gsap.quickTo(button, 'x', { duration: 0.32, ease: 'power3.out' });
      const yTo = gsap.quickTo(button, 'y', { duration: 0.32, ease: 'power3.out' });
      const move = (event) => {
        const rect = button.getBoundingClientRect();
        xTo(gsap.utils.clamp(-4, 4, (event.clientX - rect.left - rect.width / 2) * 0.12));
        yTo(gsap.utils.clamp(-4, 4, (event.clientY - rect.top - rect.height / 2) * 0.12));
      };
      const reset = () => { xTo(0); yTo(0); };
      button.addEventListener('pointermove', move, { passive: true });
      button.addEventListener('pointerleave', reset);
      cleanups.push(() => {
        button.removeEventListener('pointermove', move);
        button.removeEventListener('pointerleave', reset);
        button.classList.remove('is-magnetic');
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  });
  return () => media.revert();
}

function initScrollMotion() {
  const reveals = gsap.utils.toArray('.rv, .rv-slam').filter((element) => !element.closest('.hero'));
  if (reveals.length) {
    gsap.set(reveals, { autoAlpha: 0, y: 30, scale: 0.99, transformOrigin: '50% 50%' });
    ScrollTrigger.batch(reveals, {
      start: 'top 89%',
      interval: 0.1,
      batchMax: 5,
      once: true,
      onEnter: (batch) => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.74,
        ease: 'power3.out',
        stagger: 0.085,
        overwrite: 'auto',
        onComplete: () => batch.forEach((element) => {
          element.classList.add('in');
          gsap.set(element, { clearProps: 'opacity,visibility,transform' });
          if (element.matches('.project')) {
            gsap.set(element, { transformPerspective: 1000, transformStyle: 'preserve-3d' });
          }
        })
      })
    });
  }

  const revealImages = gsap.utils.toArray(
    '.origin__art img, .scout img, .ninja img, .finale__art img, .project__shot img, .case-shot img, .gallery img'
  ).filter((image) => !image.closest('.hero'));
  revealImages.forEach((image) => {
    const trigger = image.closest('.rv') || image;
    gsap.fromTo(image,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.95,
        ease: 'power3.inOut',
        clearProps: 'clipPath',
        scrollTrigger: { trigger, start: 'top 88%', once: true }
      }
    );
  });

  gsap.utils.toArray('.origin__art img, .scout img, .ninja img, .finale__art img').forEach((image) => {
    gsap.to(image, {
      yPercent: -3.5,
      ease: 'none',
      scrollTrigger: { trigger: image.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
    });
  });

  const navLinks = gsap.utils.toArray('.nav__links a[href*="#"]');
  navLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute('href').split('#').pop() ? `#${link.getAttribute('href').split('#').pop()}` : '');
    if (!target) return;
    ScrollTrigger.create({
      trigger: target,
      start: 'top 42%',
      end: 'bottom 42%',
      onToggle: (self) => link.classList.toggle('is-active', self.isActive)
    });
  });
}

export function initPortfolioMotion({ loader = null } = {}) {
  if (reducedMotion()) {
    loader?.remove();
    return () => {};
  }

  ScrollTrigger.config({ ignoreMobileResize: true });
  let cleanupPointers = () => {};
  const ctx = gsap.context(() => {
    initScrollMotion();
    cleanupPointers = initPointerInteractions();
  }, document);
  animateHero(ctx, loader);

  return () => {
    cleanupPointers();
    ctx.revert();
  };
}

export { gsap, ScrollTrigger };
