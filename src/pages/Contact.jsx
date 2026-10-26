import { site } from "../content/site.js";
import { usePageTitle } from "../utils.js";

export default function Contact() {
  usePageTitle("Contact");
  return (
    <div className="narrow page">
      <h1 className="page-title">Contact</h1>
      <p className="lead">For readings, publications, commissions, or just a kind word.</p>
      <dl className="details">
        <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
        {site.socials.map((s) => (
          <div key={s.label}><dt>{s.label}</dt><dd><a href={s.url} target="_blank" rel="noreferrer">{s.url.replace(/^https?:\/\/(www\.)?/, "")}</a></dd></div>
        ))}
      </dl>
    </div>
  );
}
