import financialDocumentPreview from '../assets/landing-document-processing-overview.png'
import fmaIcePreview from '../assets/FMAICE.gif'

type WorkItem = {
  badge: string
  title: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  href?: string
  tilted?: boolean
  note?: string
  icon?: 'arrow-outward' | 'layers'
}

type FooterLink = {
  label: string
  href: string
}

const filters = ['All Systems', 'Architecture', 'Interface', 'Motion']

const workItems: WorkItem[] = [
  {
    badge: 'Full-Stack 01',
    title: 'Kodi Code',
    description:
      'A programming plagiarism detection system for C and Java assignments with separate student and teacher workflows, class management, submissions, grading, and plagiarism checking.',
    image: '/kodicode-dashboard.jpg',
    imageAlt:
      'Kodi Code student dashboard showing class cards, sidebar navigation, search, and a join class button.',
    tags: ['React + Vite', 'PHP API', 'MySQL', 'JWT'],
    href: '/work/kodi-code',
    icon: 'arrow-outward',
  },
  {
    badge: 'In Progress',
    title: 'AI-Assisted Financial Document Processing System',
    description:
      'An ongoing full-stack document processing system focused on OCR, document classification, field extraction, review and correction, and AI-assisted workflows for financial records.',
    image: financialDocumentPreview,
    imageAlt:
      'AI-assisted financial document processing interface showing the document workflow and processing overview.',
    tags: ['React + Vite + TS', 'FastAPI', 'Python OCR', 'PostgreSQL'],
    href: '/work/ai-financial-system',
    tilted: true,
    note: 'Work in Progress',
    icon: 'arrow-outward',
  },
  {
    badge: 'In Progress',
    title: 'FMA ICE',
    description:
      'A custom business management system built for my parents&apos; purified ice business, covering sales, current inventory, stock-in records, transaction reports, and an AI-assisted chat layer for business questions and data retrieval. The system is already functional, with more improvements and updates still planned.',
    image: fmaIcePreview,
    imageAlt:
      'FMA ICE system preview showing the business workflow interface.',
    tags: ['React + Vite', 'TypeScript', 'Tailwind CSS', 'Flask', 'PostgreSQL'],
    href: '/work/fma-ice',
    note: 'Active project',
    icon: 'layers',
  },
]

const kodiGallery = [
  {
    src: '/kodicode-dashboard.jpg',
    alt: 'Kodi Code student dashboard with class cards and join class action.',
    caption: 'Student dashboard',
  },
  {
    src: '/kodicode-create-class.jpg',
    alt: 'Kodi Code create class modal with schedule, section, class code, and description fields.',
    caption: 'Create class flow',
  },
  {
    src: '/kodicode-join-class.jpg',
    alt: 'Kodi Code join class modal showing a valid class code and the join action.',
    caption: 'Join class flow',
  },
]

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
  name: 'menu' | 'arrow-outward' | 'layers' | 'sketch-arrow' | 'square-foot'
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
    case 'layers':
      return (
        <svg {...sharedProps}>
          <path d="m9 20-5.4-2.7A1 1 0 0 1 3 16.4V5.6a1 1 0 0 1 1.4-.9L9 7m0 13 6-3m-6 3V7m6 10 4.6 2.3a1 1 0 0 0 1.4-.9V7.6a1 1 0 0 0-.6-.9L15 4m0 13V4M15 4 9 7" />
        </svg>
      )
    case 'sketch-arrow':
      return (
        <svg {...sharedProps} viewBox="0 0 48 48">
          <path d="M4 4c0 0 11 4 14 16 3 12-8 20-8 20" />
          <path d="m10 40-4-6" />
          <path d="m10 40 6-2" />
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

export default function Works() {
  return (
    <div className="portfolio-shell" id="works-page">
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

      <main className="container works-page">
        <section className="works-hero section-space">
          <div className="works-hero-copy">
            <span className="works-sketch-label">The Process &amp; Result</span>
            <h1 className="works-title">
              Selected Works from the <span>Digital Blueprint</span>.
            </h1>
            <p className="works-description">
              Exploring the intersection of architectural precision and digital
              expression. Each project is a structural dialogue between code and
              user intent.
            </p>

            <div className="works-filters" aria-label="Project filters">
              <span className="works-filter-label">Filter By:</span>
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  className={index === 0 ? 'works-filter is-active' : 'works-filter'}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="works-grid-section">
          <div className="works-grid">
            {workItems.map((item, index) => (
              <article
                key={item.title}
                className={`work-card${index % 2 === 1 ? ' is-offset' : ''}`}
              >
                {item.href ? (
                  <a className="work-card-link" href={item.href}>
                    <div className="work-visual">
                      <div className="work-visual-glow" />
                      <img
                        className={item.tilted ? 'work-image is-tilted' : 'work-image'}
                        src={item.image}
                        alt={item.imageAlt}
                      />
                      <div className="work-badge">
                        <span>{item.badge}</span>
                      </div>
                      {item.note ? <div className="work-note">{item.note}</div> : null}
                      {item.icon === 'layers' ? (
                        <div className="work-overlay-icon">
                          <Icon name="layers" />
                        </div>
                      ) : null}
                    </div>
                  </a>
                ) : (
                  <div className="work-visual">
                    <div className="work-visual-glow" />
                    <img
                      className={item.tilted ? 'work-image is-tilted' : 'work-image'}
                      src={item.image}
                      alt={item.imageAlt}
                    />
                    <div className="work-badge">
                      <span>{item.badge}</span>
                    </div>
                    {item.note ? <div className="work-note">{item.note}</div> : null}
                    {item.icon === 'layers' ? (
                      <div className="work-overlay-icon">
                        <Icon name="layers" />
                      </div>
                    ) : null}
                  </div>
                )}

                <div className="work-content">
                  <div className="work-header">
                    {item.href ? (
                      <a className="work-title-link" href={item.href}>
                        <h3>{item.title}</h3>
                      </a>
                    ) : (
                      <h3>{item.title}</h3>
                    )}
                    {item.href ? (
                      <a className="work-arrow-link" href={item.href} aria-label={`Open ${item.title}`}>
                        <Icon name="arrow-outward" className="work-arrow" />
                      </a>
                    ) : (
                      <Icon name="arrow-outward" className="work-arrow" />
                    )}
                  </div>
                  <div className="work-divider" />
                  <p>{item.description}</p>
                  <div className="work-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {item.href ? (
                    <a className="work-case-link" href={item.href}>
                      View case study
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="works-showcase section-space">
          <div className="section-heading">
            <div>
              <span className="section-kicker">02 / Kodi Code Screens</span>
              <h2>Interface snapshots from the actual system.</h2>
            </div>
            <p className="hand-caption">
              Real project visuals <Icon name="arrow-outward" className="inline-icon" />
            </p>
          </div>

          <div className="works-mini-gallery">
            {kodiGallery.map((shot) => (
              <figure key={shot.caption} className="works-mini-shot">
                <img src={shot.src} alt={shot.alt} />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="works-showcase-actions">
            <a className="primary-button" href="/work/kodi-code">
              Open Kodi Code Case Study
              <Icon name="arrow-outward" />
            </a>
          </div>
        </section>

        <section className="works-cta section-space">
          <div className="works-cta-card">
            <div className="works-cta-glow" />
            <div className="works-cta-content">
              <span className="works-cta-kicker">Next Milestone</span>
              <h2>Let&apos;s blueprint your next digital venture together.</h2>
              <a className="primary-button works-cta-button" href="mailto:franz@example.com">
                Initiate Discussion
              </a>
            </div>

            <div className="works-cta-sketch" aria-hidden="true">
              <span>Ready when you are!</span>
              <Icon name="sketch-arrow" />
            </div>
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
