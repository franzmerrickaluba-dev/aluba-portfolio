import Background3D from '../components/Background3D'
import Tilt from 'react-parallax-tilt'
import fmaIcePreview from '../assets/FMAICE.gif'

type FooterLink = {
  label: string
  href: string
}

const footerLinks: FooterLink[] = [
  { label: 'Email', href: 'mailto:franzaluba04@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Dribbble', href: 'https://dribbble.com/' },
]

const featureShots = [
  {
    src: fmaIcePreview,
    alt: 'FMA ICE business system preview showing the current operational interface.',
    caption: 'System preview',
  },
]

function Icon({
  name,
  className = '',
}: {
  name: 'menu' | 'arrow-outward' | 'square-foot'
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
    case 'arrow-outward':
      return (
        <svg {...sharedProps}>
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
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

export default function FmaIce() {
  return (
    <div className="portfolio-shell" id="fma-ice-page">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="/">
            FRANZ MERRICK ALUBA
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link is-active" href="/work">
              Work
            </a>
            <a className="nav-link" href="/about">
              About
            </a>
            <a className="nav-link" href="/about#contact">
              Contact
            </a>
            <a className="resume-button" href="/Aluba_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </nav>

          <button className="mobile-menu" type="button" aria-label="Open menu">
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <main className="container project-page">
        <section className="section-space" style={{ position: 'relative' }}>
          <Background3D />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="project-head">
              <div>
                <span className="project-eyebrow">Case Study / 02</span>
                <h1 className="project-title">
                  FMA ICE:
                  <span> business operations</span> for sales and inventory flow.
                </h1>
              </div>

              <div className="project-sketch-note" aria-hidden="true">
                <span>Built for a real family business</span>
                <Icon name="arrow-outward" />
              </div>
            </div>

            <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.02} transitionSpeed={400} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <div className="project-hero-image-frame pop-out-sm">
                <div className="project-photo-glow" aria-hidden="true" />
                <img
                  className="project-hero-image project-hero-image-live"
                  src={fmaIcePreview}
                  alt="FMA ICE business system preview showing the current operational interface."
                />
              </div>
            </Tilt>

            <div className="project-meta-row">
              <div>
                <span>Role</span>
                <p>Full-Stack Developer</p>
              </div>
              <div>
                <span>Focus</span>
                <p>Sales and Inventory System</p>
              </div>
              <div>
                <span>Stack</span>
                <p>React / TypeScript / Flask / PostgreSQL</p>
              </div>
              <div className="project-meta-arrow">
                <span>In progress, with more updates planned</span>
                <Icon name="arrow-outward" />
              </div>
            </div>
          </div>
        </section>

        <section className="project-columns section-space">
          <aside className="project-sidebar">
            <h2>The Challenge</h2>
            <p>
              FMA ICE needed a practical system for day-to-day business operations:
              recording sales, managing inventory, tracking stock-in updates, and
              generating reports that are easy to understand and use during actual
              store work.
            </p>
            <p className="project-side-note">Built around everyday business tasks</p>

            <div className="project-side-stat">
              <span className="project-eyebrow">Core Areas</span>
              <strong>Sales + Inventory</strong>
              <p>Linked modules for product stock, transactions, stock-in history, and reporting.</p>
            </div>
          </aside>

          <div className="project-main-column">
            <h2>The Solution</h2>
            <p className="project-copy">
              I built FMA ICE as a business management system for a purified ice
              operation, with modules for available products, current inventory,
              stock-in records, and reporting. The reports area also includes an
              AI-assisted analysis panel for asking sales-related questions and
              reviewing summary insights. The system is already functional, but it
              is still an active project with more updates and refinements coming.
            </p>

            <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.02} transitionSpeed={400} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <div className="project-solution-frame pop-out-sm">
                <div className="project-photo-glow is-secondary" aria-hidden="true" />
                <img
                  className="project-solution-image-live"
                  src={fmaIcePreview}
                  alt="FMA ICE business system preview showing the current operational interface."
                />
              </div>
            </Tilt>

            <div className="project-polaroids">
              {featureShots.map((shot, index) => (
                <Tilt key={shot.caption} className={`preserve-3d ${index % 2 === 1 ? 'is-offset' : ''}`} glareEnable={true} glareMaxOpacity={0.15} scale={1.05} transitionSpeed={400} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <figure
                    className="project-polaroid project-polaroid-live pop-out-sm"
                  >
                    <img src={shot.src} alt={shot.alt} />
                    <figcaption>{shot.caption}</figcaption>
                  </figure>
                </Tilt>
              ))}
            </div>
          </div>
        </section>

        <section className="project-impact section-space">
          <h2>Project Highlights</h2>
          <div className="project-impact-grid">
            <article className="project-impact-card is-primary">
              <span>Operations</span>
              <strong>Sales Workflow</strong>
            </article>
            <article className="project-impact-card is-muted">
              <span>Inventory</span>
              <strong>Stock-In Records</strong>
            </article>
            <article className="project-impact-card">
              <span>Insight Layer</span>
              <strong>AI Analysis Chat</strong>
            </article>
          </div>

          <blockquote className="project-quote">
            <p>
              FMA ICE is grounded in real operational needs: product listing,
              current stock, stock replenishment, transaction reporting, and
              business insight features that help make the data more useful.
            </p>
            <span>Project Overview</span>
          </blockquote>
        </section>

        <section className="project-artifacts section-space">
          <div className="project-artifacts-head">
            <div>
              <h2>System Views</h2>
            </div>
            <p>Business workflow screens from the actual project</p>
          </div>

          <div className="project-artifact-grid">
            {featureShots.map((shot, index) => (
              <Tilt key={shot.caption} className={`preserve-3d ${index % 2 === 1 ? 'is-lifted' : ''}`} glareEnable={true} glareMaxOpacity={0.15} scale={1.05} transitionSpeed={400} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <figure
                  className="project-artifact-card project-artifact-card-live pop-out-sm"
                >
                  <div className="project-artifact-frame">
                    <img src={shot.src} alt={shot.alt} />
                  </div>
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              </Tilt>
            ))}
          </div>
        </section>

        <section className="section-space">
          <div className="project-next-card">
            <div>
              <span>Back to Portfolio</span>
              <h2>See the rest of my projects.</h2>
              <p>
                Return to the Work page to continue through the current portfolio
                collection.
              </p>
            </div>

            <a className="primary-button" href="/work">
              Back to Work
              <Icon name="arrow-outward" />
            </a>
          </div>
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
