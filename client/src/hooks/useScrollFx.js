import { useEffect } from 'react';

/*
 * One small engine for all scroll animations on the site:
 *  - [data-reveal] / [data-stagger] elements fade/slide in once when they enter the screen
 *  - [data-scrollbar] elements (the orange lines) fill up like a loading bar as you scroll
 *  - #scroll-progress shows how far down the page you are
 * Content is only hidden after this runs (html.fx-ready), so nothing stays invisible without JS.
 */
export default function useScrollFx(rootRef, routeKey) {
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return undefined;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.documentElement.classList.add('fx-ready');

        // ---- reveal on enter ----
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const el = e.target;
                        el.classList.add('in');
                        io.unobserve(el);
                        // Once revealed, drop the stagger delays so hover effects respond instantly
                        if (el.hasAttribute('data-stagger')) {
                            window.setTimeout(() => {
                                Array.from(el.children).forEach((c) => { c.style.transitionDelay = ''; });
                            }, 1800);
                        }
                    }
                });
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
        );

        const seen = new WeakSet();
        let bars = [];
        const scan = () => {
            root.querySelectorAll('[data-reveal], [data-stagger]').forEach((el) => {
                if (seen.has(el)) return;
                seen.add(el);
                if (el.hasAttribute('data-stagger')) {
                    Array.from(el.children).forEach((c, i) => {
                        c.style.transitionDelay = `${Math.min(i, 10) * 90}ms`;
                    });
                }
                if (reduce) el.classList.add('in');
                else io.observe(el);
            });
            bars = Array.from(root.querySelectorAll('[data-scrollbar]'));
        };

        // ---- scroll-linked loading bars + page progress ----
        const progress = document.getElementById('scroll-progress');
        let ticking = false;
        const update = () => {
            ticking = false;
            const vh = window.innerHeight;
            const atBottom = window.scrollY + vh >= document.documentElement.scrollHeight - 4;
            bars.forEach((el) => {
                const top = el.getBoundingClientRect().top;
                // 0 when the line enters at the bottom of the screen, 1 when it reaches ~35% from the top
                // (or when the page can't scroll any further)
                const p = atBottom && top < vh ? 1 : Math.min(1, Math.max(0, (vh - top) / (vh * 0.65)));
                el.style.setProperty('--p', p.toFixed(3));
            });
            if (progress) {
                const max = document.documentElement.scrollHeight - vh;
                progress.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(4) : '0');
            }
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        scan();
        update();
        // Pages are lazy-loaded, so pick up new sections as they appear
        const mo = new MutationObserver(() => {
            scan();
            onScroll();
        });
        mo.observe(root, { childList: true, subtree: true });
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            io.disconnect();
            mo.disconnect();
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [rootRef, routeKey]);
}
