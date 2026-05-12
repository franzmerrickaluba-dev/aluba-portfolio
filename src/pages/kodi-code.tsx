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
    src: '/kodicode-create-class.jpg',
    alt: 'Kodi Code create class interface with generated class code and scheduling fields.',
    caption: 'Teacher class creation',
  },
  {
    src: '/kodicode-join-class.jpg',
    alt: 'Kodi Code join class modal with valid class code entry.',
    caption: 'Student join flow',
  },
]

const artifactShots = [
  {
    src: '/kodicode-teacher-dashboard.jpg',
    alt: 'Kodi Code teacher dashboard with class cards and gradebook navigation.',
    caption: 'Teacher dashboard',
  },
  {
    src: '/kodicode-login-success.jpg',
    alt: 'Kodi Code sign in screen with successful registration notice.',
    caption: 'Authentication screen',
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

export default function KodiCode() {
  return (
    <div className="portfolio-shell" id="kodi-code-page">
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
        <section className="section-space">
          <div className="project-head">
            <div>
              <span className="project-eyebrow">Case Study / 01</span>
              <h1 className="project-title">
                Kodi Code:
                <span> classroom workflows</span> for code-based learning.
              </h1>
            </div>

            <div className="project-sketch-note" aria-hidden="true">
              <span>Built for teachers and students</span>
              <Icon name="arrow-outward" />
            </div>
          </div>

          <div className="project-hero-image-frame">
            <div className="project-photo-glow" aria-hidden="true" />
            <img
              className="project-hero-image project-hero-image-live"
              src="/kodicode-dashboard.jpg"
              alt="Kodi Code student dashboard with class search, join class action, and enrolled class cards."
            />
          </div>

          <div className="project-meta-row">
            <div>
              <span>Role</span>
              <p>Full-Stack Developer</p>
            </div>
            <div>
              <span>Focus</span>
              <p>Classroom Management</p>
            </div>
            <div>
              <span>Stack</span>
              <p>React / PHP API / MySQL / JWT</p>
            </div>
            <div className="project-meta-arrow">
              <span>Actual project screens</span>
              <Icon name="arrow-outward" />
            </div>
          </div>
        </section>

        <section className="project-columns section-space">
          <aside className="project-sidebar">
            <h2>The Challenge</h2>
            <p>
              Kodi Code needed to support both teachers and students in one system,
              while keeping common classroom actions easy to understand: registering,
              logging in, creating classes, joining classes, and moving quickly into
              the actual learning space.
            </p>
            <p className="project-side-note">From registration to class entry</p>

            <div className="project-side-stat">
              <span className="project-eyebrow">Key Flow</span>
              <strong>Teacher + Student</strong>
              <p>Separate dashboards and class actions with clear validation states.</p>
            </div>
          </aside>

          <div className="project-main-column">
            <h2>The Solution</h2>
            <p className="project-copy">
              I built Kodi Code as a classroom-oriented system for code-related
              subjects, with teacher workflows for class creation and management,
              and student workflows for joining and viewing their enrolled classes.
              The interface uses simple forms, class cards, and validation feedback
              so the system stays practical and easy to navigate.
            </p>

            <div className="project-solution-frame">
              <div className="project-photo-glow is-secondary" aria-hidden="true" />
              <img
                className="project-solution-image-live"
                src="/kodicode-teacher-dashboard.jpg"
                alt="Kodi Code teacher dashboard with search and class management view."
              />
            </div>

            <div className="project-polaroids">
              {featureShots.map((shot, index) => (
                <figure
                  key={shot.caption}
                  className={`project-polaroid project-polaroid-live${index % 2 === 1 ? ' is-offset' : ''}`}
                >
                  <img src={shot.src} alt={shot.alt} />
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="project-impact section-space">
          <h2>Project Impact</h2>
          <div className="project-impact-grid">
            <article className="project-impact-card is-primary">
              <span>Core Module</span>
              <strong>Class Creation</strong>
            </article>
            <article className="project-impact-card is-muted">
              <span>User Experience</span>
              <strong>Join-by-Code</strong>
            </article>
            <article className="project-impact-card">
              <span>System Design</span>
              <strong>Teacher / Student Roles</strong>
            </article>
          </div>

          <blockquote className="project-quote">
            <p>
              Kodi Code focuses on real classroom interactions: entering the
              system, creating classes, joining them with generated codes, and
              moving through the platform with clear visual feedback.
            </p>
            <span>Project Overview</span>
          </blockquote>
        </section>

        <section className="project-artifacts section-space">
          <div className="project-artifacts-head">
            <div>
              <h2>Screen Gallery</h2>
            </div>
            <p>Login, dashboard, and management views</p>
          </div>

          <div className="project-artifact-grid">
            {artifactShots.map((shot, index) => (
                <figure
                  key={shot.caption}
                  className={`project-artifact-card project-artifact-card-live${index % 2 === 1 ? ' is-lifted' : ''}`}
                >
                  <div className="project-artifact-frame">
                    <img src={shot.src} alt={shot.alt} />
                  </div>
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
          </div>
        </section>

        <section className="section-space">
          <div className="project-next-card">
            <div>
              <span>Back to Portfolio</span>
              <h2>Explore more of my work.</h2>
              <p>
                Return to the Work page to see the rest of the projects currently
                featured in the portfolio.
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
