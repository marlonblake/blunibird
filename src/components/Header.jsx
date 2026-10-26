import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { site, sections } from "../content/site.js";

const links = [
  ...Object.values(sections).map((s) => ({ to: "/" + s.path, label: s.label })),
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="skip" href="#main">Skip to content</a>
      <div className="bar">
        <Link to="/" className="brand" onClick={close}>{site.name}</Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          {open ? "close" : "menu"}
        </button>
        <nav id="nav" className={"nav" + (open ? " open" : "")} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={close}>{l.label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
