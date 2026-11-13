import { portfolio } from "../content";
import { Icon } from "./icon";

export function SiteFooter() {
  return (
    <footer className="site-footer site-shell">
      <a className="footer-brand" href="#top">{portfolio.initials}<span>© {new Date().getFullYear()} {portfolio.name}</span></a>
      <div className="footer-links">
        {portfolio.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<Icon name="arrow" /></a>)}
        <a href="#top">Back to top <Icon name="down" className="back-arrow" /></a>
      </div>
    </footer>
  );
}
