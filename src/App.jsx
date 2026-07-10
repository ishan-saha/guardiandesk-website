import { useEffect } from 'react';
import logo from '../LogoOnlyWhiteBackground.png';

const features = [
  {
    title: 'Complete Asset Lifecycle Management',
    text: 'Track enterprise IT hardware from procurement and provisioning to active maintenance, decommissioning, and compliant disposal with full timeline visibility.',
    chips: ['Procurement', 'Provisioning', 'Maintenance', 'Decommissioning'],
  },
  {
    title: 'Secure Credentials Vault',
    text: 'Store personal credentials in private vaults or securely share administrative secrets with scoped permissions and team-based controls.',
    chips: ['Private Vault', 'Team Share', 'Scope Rules', 'Audit Trail'],
  },
  {
    title: 'Integrated RustDesk Remote Control',
    text: 'Launch secure remote sessions instantly so helpdesk teams can troubleshoot endpoints, resolve incidents, and perform guided support at scale.',
    chips: ['Endpoint Access', 'Session Log', 'Secure Tunnel', 'Fast Assist'],
  },
  {
    title: 'IT Service & Ticket Management',
    text: 'Create, route, and manage support tickets with priority queues, escalation policies, and SLA-aware workflows for service operations.',
    chips: ['Ticket Flow', 'Priority Queue', 'SLA Rules', 'Agent Console'],
  },
  {
    title: 'Smart FAQ & Knowledge Base',
    text: 'Publish troubleshooting guides, policy docs, onboarding playbooks, and self-help content to reduce repeat tickets and boost resolution speed.',
    chips: ['Guides', 'Runbooks', 'FAQ', 'Self-Service'],
  },
  {
    title: 'Exception & Error Tracking',
    text: 'Automatically collect infrastructure and application exceptions so teams can proactively diagnose faults and prevent service degradation.',
    chips: ['Exception Feed', 'Error Trace', 'Alerts', 'Root Cause'],
  },
  {
    title: 'Automated Hardware & Software Audit',
    text: 'Periodically scan networks to discover endpoints, audit software licenses, detect shadow IT, and flag upcoming expirations before risk grows.',
    chips: ['Endpoint Scan', 'License Audit', 'Shadow IT', 'Expiry Flags'],
    wide: true,
  },
];

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const delay = Number(entry.target.getAttribute('data-delay') || 0);
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <div className="network-backdrop" aria-hidden="true" />

      <header className="top-nav reveal" data-reveal data-delay="40">
        <div className="brand-mark">
          <img src={logo} alt="Guardian Desk logo" />
          <strong>Guardian Desk</strong>
        </div>
        <a className="nav-cta" href="#contact">
          Schedule a Demo / Contact Us
        </a>
      </header>

      <main className="content-wrap">
        <section className="hero section-grid">
          <div className="hero-copy reveal" data-reveal data-delay="70">
            <p className="eyebrow">Enterprise ITAM + Service Desk</p>
            <h1>
              Guardian Desk Is The Central Ecosystem For Asset Intelligence, Secure Credential Control, and
              Frictionless Remote IT Operations
            </h1>
            <p>
              Built for modern enterprise infrastructure teams, Guardian Desk merges hardware tracking,
              password vaulting, remote support, tickets, and diagnostics into one high-visibility command
              layer.
            </p>
          </div>

          <div className="hero-visual reveal" data-reveal data-delay="150" aria-label="Enterprise technical illustration">
            <div className="mesh-panel vault">Secure Digital Vault</div>
            <div className="mesh-panel servers">Server Cluster Matrix</div>
            <div className="mesh-panel laptop">Laptop Fleet Control</div>
            <div className="mesh-panel support">User Support Interface</div>
            <div className="mesh-panel remote">Remote Connection Screen</div>
            <div className="mesh-panel logs">Exception Telemetry</div>
            <img src={logo} alt="Guardian Desk logo" className="hero-logo" />
          </div>
        </section>

        <section className="feature-zone section-block reveal" data-reveal>
          <div className="section-heading reveal" data-reveal data-delay="40">
            <img src={logo} alt="Guardian Desk logo" className="section-logo" />
            <h2>Core Tool Features & Technical Specifications</h2>
            <p>
              Every block below is tuned for scroll reveal: cards fade, slide, and scale into view while
              dense network geometry and technical illustrations stack layer-by-layer.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`feature-card reveal ${feature.wide ? 'feature-card-wide' : ''}`}
                data-reveal
                data-delay={80 + index * 40}
              >
                <div className="feature-topline">
                  <img src={logo} alt="Guardian Desk logo" className="card-logo" />
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.text}</p>

                <div className="chip-grid" aria-hidden="true">
                  {feature.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-zone reveal" data-reveal>
          <div className="cta-frame reveal" data-reveal data-delay="80">
            <img src={logo} alt="Guardian Desk logo" className="cta-logo" />
            <h2>Launch Guardian Desk Across Your IT Landscape</h2>
            <p>
              Give your system administrators and IT managers one bold operational command center for
              infrastructure support, endpoint governance, and secure service delivery.
            </p>
            <div className="cta-actions">
              <a className="cta-primary" href="mailto:ishan.saha@rntinfosec.in">
                Schedule a Demo / Contact Us
              </a>
              <a className="cta-secondary" href="tel:+918178682111">
                Call +91 8178682111
              </a>
            </div>

            <div className="contact-grid">
              <a href="mailto:ishan.saha@rntinfosec.in">ishan.saha@rntinfosec.in</a>
              <a href="tel:+918178682111">+91 8178682111</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src={logo} alt="Guardian Desk logo" className="footer-logo" />
        <p>Guardian Desk</p>
        <a href="mailto:ishan.saha@rntinfosec.in">ishan.saha@rntinfosec.in</a>
        <a href="tel:+918178682111">+91 8178682111</a>
      </footer>
    </div>
  );
}

export default App;
