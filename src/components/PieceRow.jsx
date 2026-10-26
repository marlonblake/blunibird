import { Link } from "react-router-dom";
import { sections } from "../content/site.js";
import { excerpt, formatDate } from "../utils.js";

export default function PieceRow({ piece, showType = false }) {
  return (
    <Link to={`/read/${piece.slug}`} className="row">
      <h3>{piece.title}</h3>
      <p className="meta">
        {showType && sections[piece.type].label.replace(/s$/, "").toLowerCase() + ", "}
        {formatDate(piece.date)}
      </p>
      <p className="peek">{excerpt(piece)}</p>
    </Link>
  );
}
