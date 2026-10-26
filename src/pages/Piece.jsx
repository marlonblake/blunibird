import { Link, useParams } from "react-router-dom";
import { sections } from "../content/site.js";
import { writing } from "../content/writing.js";
import { formatDate, paragraphs, usePageTitle } from "../utils.js";
import NotFound from "./NotFound.jsx";

export default function Piece() {
  const { slug } = useParams();
  const piece = writing.find((p) => p.slug === slug);
  usePageTitle(piece ? piece.title || "Quote" : "Not found");
  if (!piece) return <NotFound />;

  const section = sections[piece.type];
  const same = writing.filter((p) => p.type === piece.type);
  const i = same.findIndex((p) => p.slug === slug);
  const newer = same[i - 1];
  const older = same[i + 1];

  return (
    <article className="narrow page">
      <Link className="crumb" to={"/" + section.path}>← {section.label}</Link>

      {piece.type === "quote" ? (
        <blockquote className="big-quote">{piece.body.trim()}</blockquote>
      ) : (
        <>
          <h1 className="piece-title">{piece.title}</h1>
          <p className="meta">{formatDate(piece.date)}</p>
          {piece.type === "poem" ? (
            <div className="poem">{piece.body.trim()}</div>
          ) : (
            <div className="prose">{paragraphs(piece.body).map((t, n) => <p key={n}>{t}</p>)}</div>
          )}
        </>
      )}

      <div className="end" aria-hidden="true">~</div>

      <nav className="pager" aria-label="More">
        {newer ? <Link to={`/read/${newer.slug}`}>← {newer.title || "newer"}</Link> : <span />}
        {older ? <Link to={`/read/${older.slug}`}>{older.title || "older"} →</Link> : <span />}
      </nav>
    </article>
  );
}
