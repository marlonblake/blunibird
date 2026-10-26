import { Link } from "react-router-dom";
import { sections } from "../content/site.js";
import { writing } from "../content/writing.js";
import PieceRow from "../components/PieceRow.jsx";
import { usePageTitle } from "../utils.js";

export default function Collection({ type }) {
  const s = sections[type];
  usePageTitle(s.label);
  const items = writing.filter((p) => p.type === type);

  return (
    <div className="narrow page">
      <h1 className="page-title">{s.label}</h1>
      <p className="soft lead">{s.blurb}</p>
      {items.length === 0 && <p className="soft">Nothing here yet. Check back soon.</p>}
      {items.map((p) =>
        type === "quote" ? (
          <Link key={p.slug} to={`/read/${p.slug}`} className="row quote-row">
            <span className="quote">{p.body.trim()}</span>
          </Link>
        ) : (
          <PieceRow key={p.slug} piece={p} />
        )
      )}
    </div>
  );
}
