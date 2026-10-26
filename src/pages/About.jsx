import { Link } from "react-router-dom";
import { site } from "../content/site.js";
import { usePageTitle } from "../utils.js";

export default function About() {
  usePageTitle("About");
  return (
    <div className="narrow page">
      <h1 className="page-title">About</h1>
      <div className="prose">
        {site.about.map((t, i) => <p key={i} className={i === 0 ? "lede" : ""}>{t}</p>)}
      </div>

      {site.publishedIn.length > 0 && (
        <>
          <h2 className="block-title">Published &amp; read in</h2>
          <ul className="plain">
            {site.publishedIn.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </>
      )}

      <p className="soft">Want to say hello? <Link to="/contact">Find me here.</Link></p>
    </div>
  );
}
