import gsap from 'gsap';

/**
 * Explodes physics-based confetti particles from the given element.
 * Matching the burst effect from demo1.
 */
export function burstConfetti(target: HTMLElement | null) {
  if (!target) return;
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const rect = target.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ['#1E60F2', '#38BDF8', '#818CF8', '#10B981', '#F59E0B', '#EC4899', '#6366F1'];

  for (let i = 0; i < 36; i++) {
    const particle = document.createElement('i');
    particle.className = 'confetti-particle';
    particle.style.background = colors[i % colors.length];
    particle.style.left = `${cx}px`;
    particle.style.top = `${cy}px`;
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 140;

    gsap.to(particle, {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 80,
      rotation: Math.random() * 540 - 270,
      scale: Math.random() * 0.9 + 0.4,
      opacity: 0,
      duration: 1.1 + Math.random() * 0.6,
      ease: 'power3.out',
      onComplete: () => {
        particle.remove();
      },
    });
  }
}

/**
 * Creates a circular expanding ripple on pointer down.
 */
export function createRipple(e: React.PointerEvent<HTMLElement> | MouseEvent) {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const target = (e.currentTarget || e.target) as HTMLElement;
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2.2;
  const ripple = document.createElement('span');
  ripple.className = 'btn-ripple';
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

  target.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 800);
}

/**
 * Shakes an element or group of elements on error.
 */
export function shakeElement(target: HTMLElement | HTMLElement[]) {
  if (!target) return;
  gsap.fromTo(
    target,
    { x: -10 },
    {
      x: 0,
      duration: 0.5,
      ease: 'elastic.out(1.2, 0.3)',
      overwrite: 'auto',
    }
  );
}
