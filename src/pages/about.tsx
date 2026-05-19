import Background3D from '../components/Background3D'
import Tilt from 'react-parallax-tilt'
import type { FormEvent } from 'react'

type Capability = {
  title: string
  items?: string[]
  role?: string
  company?: string
  period?: string
  secondaryRole?: string
  secondaryCompany?: string
  secondaryPeriod?: string
  groups?: {
    heading: string
    lines: string[]
  }[]
  icon: 'architecture' | 'code' | 'history'
  muted?: boolean
}

type FooterLink = {
  label: string
  href: string
}

const capabilities: Capability[] = [
  {
    title: 'Front-End Systems',
    items: [
      'HTML + CSS',
      'React + Vite',
      'TypeScript',
      'Tailwind CSS',
      'Flowbite',
      'Responsive Interfaces',
      'Component-Based UI',
    ],
    icon: 'architecture',
  },
  {
    title: 'Back-End Development',
    items: [
      'Node.js + APIs',
      'MySQL + PostgreSQL',
      'Python Development',
      'Git + GitHub Workflow',
    ],
    icon: 'code',
    muted: true,
  },
  {
    title: 'Education & Goals',
    groups: [
      {
        heading: 'Education',
        lines: [
          'BS in Information Technology',
          'BS in Architecture',
        ],
      },
      {
        heading: 'Current Focus',
        lines: [
          'Full-Stack Development',
          'React + Vite',
          'Node.js / MySQL / PostgreSQL',
        ],
      },
      {
        heading: 'Career Goal',
        lines: [
          'Open to Junior Developer Roles',
          'Internship / Entry-Level Opportunities',
        ],
      },
    ],
    icon: 'history',
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
  name:
    | 'menu'
    | 'double-arrow'
    | 'architecture'
    | 'code'
    | 'history'
    | 'mail'
    | 'location'
    | 'draw'
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
    case 'double-arrow':
      return (
        <svg {...sharedProps}>
          <path d="m7 7 5 5-5 5" />
          <path d="m12 7 5 5-5 5" />
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
    case 'code':
      return (
        <svg {...sharedProps}>
          <path d="m9 18-6-6 6-6" />
          <path d="m15 6 6 6-6 6" />
        </svg>
      )
    case 'history':
      return (
        <svg {...sharedProps}>
          <path d="M12 8v5l3 2" />
          <path d="M3.5 12a8.5 8.5 0 1 0 2.5-6" />
          <path d="M3 4v4h4" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...sharedProps}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 8 8 6 8-6" />
        </svg>
      )
    case 'location':
      return (
        <svg {...sharedProps}>
          <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
          <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
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

export default function About() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    
    window.location.href = `mailto:franzaluba04@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="portfolio-shell" id="about-page">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="/">
            FRANZ MERRICK ALUBA
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/work">
              Work
            </a>
            <a className="nav-link is-active" href="/about">
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

      <main className="container about-page">
        <section className="about-hero section-space" style={{ position: 'relative' }}>
          <Background3D />
          <div className="about-hero-grid" style={{ position: 'relative', zIndex: 1 }}>
            <div className="about-portrait-column">
              <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.02} transitionSpeed={400} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <div className="about-portrait-frame sketchy-card pop-out-sm">
                  <img
                    className="about-portrait"
                    src="/franz-merrick-aluba-profile.jpg"
                    alt="Professional portrait of Franz Merrick Aluba in formal attire."
                  />
                </div>
              </Tilt>

              <div className="about-portrait-note" aria-hidden="true">
                <span>The Designer</span>
                <Icon name="double-arrow" className="about-portrait-arrow" />
              </div>
            </div>

            <div className="about-copy">
              <div className="about-title-block">
                <span className="about-section-label">Section 01 // Identity</span>
                <h1>
                  I bridge the gap between <span>form</span> and{' '}
                  <strong>function</strong>.
                </h1>
              </div>

              <div className="about-text-block">
                <p className="about-lead">
                  Hello, I&apos;m Franz Merrick Aluba, a full-stack developer who
                  builds both the front-end and back-end of web applications. I
                  mainly work with HTML, CSS, React, Vite, TypeScript, Node.js,
                  MySQL, PostgreSQL, Git, and Python to create clean, reliable,
                  full-stack systems.
                </p>
                <p className="about-quote">
                  "Design is not just what it looks like and feels like. Design is
                  how it works... and how it lives in the mind of the user."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-capabilities section-space">
          <div className="about-section-header">
            <span className="about-section-label">Section 02 // Stack &amp; Experience</span>
          </div>

          <div className="about-capability-grid">
            {capabilities.map((capability) => (
              <Tilt key={capability.title} className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.02} transitionSpeed={400} tiltMaxAngleX={5} tiltMaxAngleY={5} style={{ display: 'flex', flexDirection: 'column' }}>
                <article
                  className={`about-capability-card${capability.muted ? ' is-muted' : ''}`}
                  style={{ flexGrow: 1 }}
                >
                  <div className="about-capability-icon pop-out-sm">
                    <Icon name={capability.icon} />
                  </div>
                  <h3 className="pop-out">{capability.title}</h3>

                  {capability.items ? (
                    <ul className="about-capability-list pop-out-sm">
                    {capability.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : capability.groups ? (
                  <div className="about-education-groups">
                    {capability.groups.map((group) => (
                      <div key={group.heading} className="about-education-group">
                        <p className="about-venture-role is-primary">{group.heading}</p>
                        <div className="about-education-lines">
                          {group.lines.map((line) => (
                            <p key={line} className="about-venture-meta">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="about-venture-list">
                    <div>
                      <p className="about-venture-role is-primary">{capability.role}</p>
                      <p className="about-venture-meta">
                        {capability.company} {' / '} {capability.period}
                      </p>
                    </div>
                    <div>
                      <p className="about-venture-role">{capability.secondaryRole}</p>
                      <p className="about-venture-meta">
                        {capability.secondaryCompany} {' / '} {capability.secondaryPeriod}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            </Tilt>
            ))}
          </div>
        </section>

        <section className="about-contact section-space" id="contact">
          <div className="about-contact-grid">
            <div className="about-contact-copy">
              <div className="about-title-block">
                <span className="about-section-label">Section 03 // Inquiry</span>
                <h2>
                  Let&apos;s draft <br /> something great.
                </h2>
                <p>
                  If you&apos;d like to collaborate, ask a question, or talk about a
                  project, you can reach me through the details here.
                </p>
              </div>

              <div className="about-contact-points">
                <div className="about-contact-item">
                  <Icon name="mail" />
                  <span>franzaluba04@gmail.com</span>
                </div>
                <div className="about-contact-item">
                  <Icon name="location" />
                  <span>Basak, Mandaue City</span>
                </div>
              </div>
            </div>

            <Tilt className="preserve-3d" glareEnable={true} glareMaxOpacity={0.15} scale={1.02} transitionSpeed={400} tiltMaxAngleX={3} tiltMaxAngleY={3} style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="about-form-card sketchy-card" style={{ flexGrow: 1 }}>
                <form className="about-form pop-out-sm" onSubmit={handleSubmit}>
                <div className="about-form-field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" placeholder="" />
                </div>

                <div className="about-form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                  />
                </div>

                <div className="about-form-field">
                  <label htmlFor="message">Your Brief / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder=""
                  />
                </div>

                <div className="about-form-actions">
                  <div className="about-signature" aria-hidden="true">
                    <Icon name="draw" />
                    <span>Signature required</span>
                  </div>

                  <button className="about-submit-button" type="submit">
                    Send Blueprint
                    <Icon name="send" />
                  </button>
                </div>
              </form>
            </div>
          </Tilt>
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
