import { Link } from "react-router-dom";
import { site, sections } from "../content/site.js";

export default function Footer() {
  const { credit } = site;
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-name">{site.name}</p>
          <p className="soft">I keep these here. Take what you need, leave the window open.</p>
        </div>
        <nav aria-label="Footer">
          {Object.values(sections).map((s) => (
            <Link key={s.path} to={"/" + s.path}>{s.label}</Link>
          ))}
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <p className="fine">
        © {new Date().getFullYear()} {site.name}. All writing belongs to its author.
        {credit.name && (
          <> Site by {credit.url ? <a href={credit.url}>{credit.name}</a> : credit.name}.</>
        )}
      </p>
    </footer>
  );
}
