import Background3D from '../components/Background3D'
import Tilt from 'react-parallax-tilt'

type NavLink = {
  label: string
  href: string
}

type FooterLink = {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/about#contact' },
]

const stack = ['HTML + CSS', 'React + Vite', 'TypeScript', 'Node.js']

const footerLinks: FooterLink[] = [
  { label: 'Email', href: 'mailto:franz@example.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Dribbble', href: 'https://dribbble.com/' },
]

function Icon({
  name,
  className = '',
}: {
  name:
    | 'menu'
    | 'arrow-right'
    | 'south-east'
    | 'draw'
    | 'unfold'
    | 'architecture'
    | 'pen'
    | 'send'
    | 'square-foot'
  className?: string
}) {
  const sharedProps = {
    'aria-hidden': true,
    className: `icon ${className}`.trim(),
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
  }

  switch (name) {
    case 'menu':
      return (
        <svg {...sharedProps}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg {...sharedProps}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      )
    case 'south-east':
      return (
        <svg {...sharedProps}>
          <path d="M7 7h10v10" />
          <path d="m7 17 10-10" />
        </svg>
      )
    case 'draw':
      return (
        <svg {...sharedProps}>
          <path d="m4 17 7-7" />
          <path d="m13 8 3-3 3 3-3 3" />
          <path d="m4 20 4-1-3-3-1 4Z" />
        </svg>
      )
    case 'unfold':
      return (
        <svg {...sharedProps}>
          <path d="m12 4-4 4" />
          <path d="m12 4 4 4" />
          <path d="M12 20V4" />
          <path d="m12 20-4-4" />
          <path d="m12 20 4-4" />
        </svg>
      )
    case 'architecture':
      return (
        <svg {...sharedProps}>
          <path d="M4 19h16" />
          <path d="M7 19V9l5-4 5 4v10" />
          <path d="M9 13h6" />
        </svg>
      )
    case 'pen':
      return (
        <svg {...sharedProps}>
          <path d="m5 19 3.5-.8L18 8.7 15.3 6 5.8 15.5 5 19Z" />
          <path d="m13.8 7.5 2.7 2.7" />
        </svg>
      )
    case 'send':
      return (
        <svg {...sharedProps}>
          <path d="M4 11.5 20 4l-5.8 16-2.7-6.7L4 11.5Z" />
          <path d="M11.5 13.3 20 4" />
        </svg>
      )
    case 'square-foot':
      return (
        <svg {...sharedProps}>
          <path d="M5 5h14v14H5z" />
          <path d="M9 9h6v6H9z" />
        </svg>
      )
  }
}

export default function Home() {
  return (
    <div className="portfolio-shell" id="home">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="/">
            FRANZ MERRICK ALUBA
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={link.label === 'Home' ? 'nav-link is-active' : 'nav-link'}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a className="resume-button" href="/Aluba_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </nav>

          <button className="mobile-menu" type="button" aria-label="Open menu">
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section container section-space">
          <Background3D />
          <div className="hero-copy" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-note">
              <p>Drafting the future</p>
              <Icon name="draw" className="hero-note-icon" />
            </div>

            <p className="eyebrow">Full-Stack Developer / Web Applications</p>
            <h1>
              Crafting <span>digital</span> structures with precision.
            </h1>
            <p className="hero-description">
              A full-stack developer focused on building complete web
              applications with React, Vite, TypeScript, Node.js, and relational
              databases, turning polished interfaces into dependable,
              database-driven systems.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="/work">
                View Work
                <Icon name="arrow-right" />
              </a>
              <a className="secondary-button sketch-border" href="/about">
                The Process
              </a>
            </div>

            <div className="hero-stack" aria-label="Core stack">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="hero-grid" aria-hidden="true" />
        </section>

        <section className="container section-space" id="work">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 / Featured Project</span>
              <h2>Kodi Code</h2>
            </div>
            <a href="/work/kodi-code" className="hand-caption" style={{ textDecoration: 'none', color: 'inherit' }}>
              See how it was built <Icon name="south-east" className="inline-icon" />
            </a>
          </div>

          <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.02} transitionSpeed={400} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <article className="featured-card pop-out-sm">
              <div className="featured-floating-mark">
                <Icon name="unfold" />
              </div>

              <div className="featured-image-frame">
                <a href="/work/kodi-code">
                  <img
                    className="featured-image"
                    src="/kodicode-dashboard.jpg"
                    alt="Kodi Code student dashboard showing class cards, sidebar navigation, search, and a join class button."
                  />
                </a>

                <div className="spec-card">
                  <p className="spec-label">Technical Specification</p>
                  <p className="spec-text">
                    A programming plagiarism detection system for C and Java assignments with separate student and teacher workflows, class management, and automated grading.
                  </p>
                  <div className="spec-tags">
                    <span>React</span>
                    <span>PHP API</span>
                    <span>MySQL</span>
                  </div>
                </div>
              </div>
            </article>
          </Tilt>
        </section>

        <section className="container section-space stats-section" id="about">
          <div className="stats-grid">
            <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.05} transitionSpeed={400} tiltMaxAngleX={10} tiltMaxAngleY={10} style={{ display: 'flex', flexDirection: 'column' }}>
              <article className="info-card stat-card pop-out-sm" style={{ flexGrow: 1 }}>
                <div>
                  <span className="card-label">Years of Study</span>
                  <p className="stat-value">04</p>
                </div>
                <p className="card-copy">
                  Transitioning academic foundations into full-scale digital solutions.
                </p>
              </article>
            </Tilt>

            <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.05} transitionSpeed={400} tiltMaxAngleX={10} tiltMaxAngleY={10} style={{ display: 'flex', flexDirection: 'column' }}>
              <article className="quote-card pop-out-sm" style={{ flexGrow: 1 }}>
                <div className="quote-icon">
                  <Icon name="architecture" />
                </div>
                <p className="quote-text">
                  "Design is not just what it looks like... it&apos;s how it works."
                </p>
                <div className="quote-watermark">
                  <Icon name="pen" />
                </div>
              </article>
            </Tilt>

            <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.05} transitionSpeed={400} tiltMaxAngleX={10} tiltMaxAngleY={10} style={{ display: 'flex', flexDirection: 'column' }}>
              <article className="info-card stat-card pop-out-sm" style={{ flexGrow: 1 }}>
                <div>
                  <span className="card-label">Core Projects</span>
                  <p className="stat-value">03</p>
                </div>
                <p className="card-copy">
                  Showcasing complete, end-to-end full-stack development and system design.
                </p>
              </article>
            </Tilt>
          </div>
        </section>

        <section className="container section-space cta-section" id="contact">
          <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.02} transitionSpeed={400} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="cta-card pop-out-sm">
              <div className="cta-content">
                <h3>Ready to draft your next vision?</h3>
                <p>
                  Let&apos;s collaborate on a digital experience that defines your
                  brand with clarity, personality, and structure.
                </p>
                <a className="cta-link" href="/about#contact">
                  Let&apos;s Talk
                  <Icon name="send" />
                </a>
              </div>

              <svg
                className="cta-blueprint"
                aria-hidden="true"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path d="M0 20 L100 20 M20 0 L20 100 M0 80 L100 80 M80 0 L80 100" />
              </svg>
            </div>
          </Tilt>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-copy">&copy; 2026 Built with Precision &amp; Ink</p>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-mark" aria-hidden="true">
            <Icon name="square-foot" />
          </div>
        </div>
      </footer>
    </div>
  )
}
