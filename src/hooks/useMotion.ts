import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function usePortfolioMotion(dependencyKey?: any) {
  useEffect(() => {
    if (reducedMotion()) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      // Reveal elements
      const reveals = gsap.utils
        .toArray<HTMLElement>('.rv, .rv-slam')
        .filter((el) => !el.closest('.hero'));

      if (reveals.length) {
        gsap.set(reveals, {
          autoAlpha: 0,
          y: 24,
          scale: 0.99,
          transformOrigin: '50% 50%',
        });

        ScrollTrigger.batch(reveals, {
          start: 'top 90%',
          interval: 0.08,
          batchMax: 5,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              ease: 'power3.out',
              stagger: 0.08,
              overwrite: 'auto',
              onComplete: () => {
                batch.forEach((el) => {
                  el.classList.add('in');
                  gsap.set(el, { clearProps: 'opacity,visibility,transform' });
                });
              },
            }),
        });
      }

      // Reveal manga character illustrations with clipPath
      const revealArtImages = gsap.utils
        .toArray<HTMLElement>(
          '.origin__art img, .scout img, .ninja img, .finale__art img'
        )
        .filter((img) => !img.closest('.hero'));

      revealArtImages.forEach((img) => {
        const trigger = img.closest('.rv') || img;
        gsap.fromTo(
          img,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.9,
            ease: 'power3.inOut',
            clearProps: 'clipPath',
            scrollTrigger: { trigger, start: 'top 88%', once: true },
          }
        );
      });

      // Ensure project preview and case study screenshots are always fully visible
      gsap.set('.project__shot img, .case-shot img, .gallery img, .phone img', {
        clipPath: 'none',
        autoAlpha: 1,
      });

      // Pointer interactions
      const media = gsap.matchMedia();
      media.add('(hover: hover) and (pointer: fine)', () => {
        const heroArt = document.querySelector<HTMLElement>('.hero__art');
        if (heroArt) {
          gsap.set(heroArt, { transformPerspective: 1150, transformStyle: 'preserve-3d' });
          const rotateX = gsap.quickTo(heroArt, 'rotationX', { duration: 0.55, ease: 'power3.out' });
          const rotateY = gsap.quickTo(heroArt, 'rotationY', { duration: 0.55, ease: 'power3.out' });

          const move = (e: PointerEvent) => {
            const rect = heroArt.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            rotateX(gsap.utils.clamp(-2.2, 2.2, y * -4.4));
            rotateY(gsap.utils.clamp(-2.8, 2.8, x * 5.6));
          };
          const reset = () => {
            rotateX(0);
            rotateY(0);
          };

          heroArt.addEventListener('pointermove', move, { passive: true });
          heroArt.addEventListener('pointerleave', reset);
        }

        document.querySelectorAll<HTMLElement>('.project').forEach((card) => {
          gsap.set(card, { transformPerspective: 1000, transformStyle: 'preserve-3d' });
          const rotateX = gsap.quickTo(card, 'rotationX', { duration: 0.38, ease: 'power3.out' });
          const rotateY = gsap.quickTo(card, 'rotationY', { duration: 0.38, ease: 'power3.out' });

          const move = (e: PointerEvent) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            rotateX(gsap.utils.clamp(-2.6, 2.6, y * -5.2));
            rotateY(gsap.utils.clamp(-3.2, 3.2, x * 6.4));
          };
          const reset = () => {
            rotateX(0);
            rotateY(0);
          };

          card.addEventListener('pointermove', move, { passive: true });
          card.addEventListener('pointerleave', reset);
        });

        document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
          btn.classList.add('is-magnetic');
          const xTo = gsap.quickTo(btn, 'x', { duration: 0.32, ease: 'power3.out' });
          const yTo = gsap.quickTo(btn, 'y', { duration: 0.32, ease: 'power3.out' });

          const move = (e: PointerEvent) => {
            const rect = btn.getBoundingClientRect();
            xTo(gsap.utils.clamp(-4, 4, (e.clientX - rect.left - rect.width / 2) * 0.12));
            yTo(gsap.utils.clamp(-4, 4, (e.clientY - rect.top - rect.height / 2) * 0.12));
          };
          const reset = () => {
            xTo(0);
            yTo(0);
          };

          btn.addEventListener('pointermove', move, { passive: true });
          btn.addEventListener('pointerleave', reset);
        });
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [dependencyKey]);
}
