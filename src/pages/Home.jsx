import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { site, sections } from "../content/site.js";
import { writing } from "../content/writing.js";
import PieceRow from "../components/PieceRow.jsx";
import { usePageTitle } from "../utils.js";

function Tagline() {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setFade(true);
      setTimeout(() => { setI((n) => (n + 1) % site.taglines.length); setFade(false); }, 800);
    }, 5200);
    return () => clearInterval(t);
  }, []);
  return <p className={"tagline" + (fade ? " fade" : "")}>{site.taglines[i]}</p>;
}

export default function Home() {
  usePageTitle("");
  const latest = writing.filter((p) => p.type !== "quote").slice(0, 3);
  const featuredQuote = writing.find((p) => p.type === "quote");

  return (
    <>
      <section className="hero wide">
        <h1 className="wordmark">
          {site.name}
          <span className="ghost" aria-hidden="true">{site.name}</span>
        </h1>
        <Tagline />
        <p className="intro">{site.intro}</p>
        <div className="actions">
          <Link className="btn" to="/poems">Read the poems</Link>
          <Link className="btn ghost-btn" to="/about">About me</Link>
        </div>
      </section>

      <section className="block narrow">
        <h2 className="block-title">Latest writing</h2>
        {latest.map((p) => <PieceRow key={p.slug} piece={p} showType />)}
      </section>

      <section className="block wide">
        <h2 className="block-title">Browse</h2>
        <div className="tiles">
          {Object.entries(sections).map(([type, s]) => (
            <Link key={type} to={"/" + s.path} className="tile">
              <span className="tile-label">{s.label}</span>
              <span className="tile-blurb">{s.blurb}</span>
              <span className="tile-count">{writing.filter((p) => p.type === type).length} pieces</span>
            </Link>
          ))}
        </div>
      </section>

      {featuredQuote && (
        <section className="block narrow">
          <blockquote className="big-quote">{featuredQuote.body.trim()}</blockquote>
        </section>
      )}
    </>
  );
}
