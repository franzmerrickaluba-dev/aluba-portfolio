import Background3D from '../components/Background3D'
import Tilt from 'react-parallax-tilt'
import aiAssistedLandingPage from '../assets/AI Assisted landing page.gif'
import documentSearchPreview from '../assets/home-document-search-preview.gif'
import promptPoliciesPreview from '../assets/home-prompt-policies-preview.gif'
import documentIntakeUpload from '../assets/landing-document-intake-upload.png'
import documentProcessingOverview from '../assets/landing-document-processing-overview.png'
import documentValidationDemo from '../assets/landing-document-validation-demo.gif'

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
    src: documentIntakeUpload,
    alt: 'Financial document intake screen for uploading and organizing incoming files.',
    caption: 'Document intake upload',
  },
  {
    src: documentValidationDemo,
    alt: 'Validation workflow showing document review and correction steps.',
    caption: 'Validation and review',
  },
]

const artifactShots = [
  {
    src: aiAssistedLandingPage,
    alt: 'AI-Assisted Financial Document Processing System landing page overview.',
    caption: 'System landing page',
  },
  {
    src: documentSearchPreview,
    alt: 'Search preview for finding processed documents and information quickly.',
    caption: 'Document search',
  },
  {
    src: promptPoliciesPreview,
    alt: 'Prompt and policy interface for guided AI-assisted financial document handling.',
    caption: 'Prompt policies',
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

export default function AiFinancialSystem() {
  return (
    <div className="portfolio-shell" id="ai-financial-system-page">
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
                <span className="project-eyebrow">Case Study / 03</span>
                <h1 className="project-title">
                  AI-Assisted Financial
                  <span> document processing</span> for intake, validation, and search.
                </h1>
              </div>

              <div className="project-sketch-note" aria-hidden="true">
                <span>Still in progress</span>
                <Icon name="arrow-outward" />
              </div>
            </div>

            <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.02} transitionSpeed={400} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <div className="project-hero-image-frame pop-out-sm">
                <div className="project-photo-glow" aria-hidden="true" />
                <img
                  className="project-hero-image project-hero-image-live"
                  src={documentProcessingOverview}
                  alt="AI-assisted financial document processing overview screen showing OCR, extraction, and workflow modules."
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
                <p>Document Intelligence Workflow</p>
              </div>
              <div>
                <span>Stack</span>
                <p>React / TypeScript / FastAPI / PostgreSQL</p>
              </div>
              <div className="project-meta-arrow">
                <span>OCR, extraction, and validation flow</span>
                <Icon name="arrow-outward" />
              </div>
            </div>
          </div>
        </section>

        <section className="project-columns section-space">
          <aside className="project-sidebar">
            <h2>The Challenge</h2>
            <p>
              Financial records often come in different formats and need a careful
              workflow for intake, OCR, field extraction, review, and correction.
              The system needed to reduce manual effort while keeping results
              clear and reviewable.
            </p>
            <p className="project-side-note">From uploaded file to validated result</p>

            <div className="project-side-stat">
              <span className="project-eyebrow">Core Flow</span>
              <strong>Upload + Validate</strong>
              <p>Structured steps for intake, processing, checking, and guided correction.</p>
            </div>
          </aside>

          <div className="project-main-column">
            <h2>The Solution</h2>
            <p className="project-copy">
              I designed this project as an AI-assisted document workflow for
              financial records, combining document intake, OCR evaluation, field
              extraction, validation, and review in one interface. The goal is to
              make records easier to process while keeping the system transparent
              enough for human checking and correction.
            </p>

            <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.02} transitionSpeed={400} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <div className="project-solution-frame pop-out-sm">
                <div className="project-photo-glow is-secondary" aria-hidden="true" />
                <img
                  className="project-solution-image-live"
                  src={documentValidationDemo}
                  alt="Validation demo for checking processed document results."
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
              <span>Intake</span>
              <strong>Upload Workflow</strong>
            </article>
            <article className="project-impact-card is-muted">
              <span>Processing</span>
              <strong>OCR + Field Extraction</strong>
            </article>
            <article className="project-impact-card">
              <span>Review</span>
              <strong>Validation Demo</strong>
            </article>
          </div>

          <blockquote className="project-quote">
            <p>
              This project focuses on turning document-heavy financial workflows
              into a clearer pipeline for intake, processing, validation, search,
              and policy-guided AI assistance.
            </p>
            <span>Project Overview</span>
          </blockquote>
        </section>

        <section className="project-artifacts section-space">
          <div className="project-artifacts-head">
            <div>
              <h2>Screen Gallery</h2>
            </div>
            <p>Additional views from the current system build</p>
          </div>

          <div className="project-artifact-grid">
            {artifactShots.map((shot, index) => (
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
              <h2>Return to the Work page.</h2>
              <p>
                Go back to the project list to continue through the rest of the
                portfolio.
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
