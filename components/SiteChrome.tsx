import Link from "next/link";
import { Arrow, Facebook, GitHub, LinkedIn, Twitter } from "./Icons";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Ponup home">
      <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>Ponup</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#features">Features</Link>
          <Link href="/use-cases/">Use cases</Link>
          <Link href="/alternatives/">Compare</Link>
          <Link href="/pricing/">Pricing</Link>
        </nav>
        <div className="nav-actions">
          <a className="text-link desktop-only" href="https://github.com/ctoframework/ponup">GitHub</a>
          <Link className="button button-small" href="/contact/">Get started <Arrow /></Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><span /><span /></summary>
          <nav>
            <Link href="/#features">Features</Link>
            <Link href="/use-cases/">Use cases</Link>
            <Link href="/alternatives/">Compare</Link>
            <Link href="/pricing/">Pricing</Link>
            <a href="https://github.com/ctoframework/ponup">Open source</a>
            <Link href="/contact/">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Logo />
          <p>Context engineering for AI.<br />Content management for humans.</p>
          <div className="social-links" aria-label="Ponup social media">
            <a href="https://www.linkedin.com/company/ponup" aria-label="Ponup on LinkedIn" target="_blank" rel="noreferrer"><LinkedIn /></a>
            <a href="https://www.facebook.com/ponup" aria-label="Ponup on Facebook" target="_blank" rel="noreferrer"><Facebook /></a>
            <a href="https://x.com/ponup" aria-label="Ponup on X (formerly Twitter)" target="_blank" rel="noreferrer"><Twitter /></a>
            <a href="https://github.com/ctoframework/ponup" aria-label="Ponup on GitHub" target="_blank" rel="noreferrer"><GitHub /></a>
          </div>
        </div>
        <div className="footer-links">
          <div><strong>Product</strong><Link href="/#features">Features</Link><Link href="/use-cases/">Use cases</Link><Link href="/alternatives/">Compare</Link><Link href="/pricing/">Pricing</Link><Link href="/contact/">Cloud</Link></div>
          <div><strong>Developers</strong><a href="https://github.com/ctoframework/ponup">GitHub</a><a href="https://github.com/ctoframework/ponup#quick-start">Documentation</a><a href="https://github.com/ctoframework/ponup/blob/main/LICENSE">MIT License</a></div>
          <div><strong>Connect</strong><Link href="/contact/">Contact</Link><a href="mailto:hello@ponup.dev">hello@ponup.dev</a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Ponup</span><span>Open source at heart. Hosted with care.</span></div>
    </footer>
  );
}
