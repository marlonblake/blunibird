import { Link } from "react-router-dom";
import { usePageTitle } from "../utils.js";

export default function NotFound() {
  usePageTitle("Not found");
  return (
    <div className="narrow page">
      <h1 className="page-title">Wrong room</h1>
      <p className="lead">That page doesn’t exist, or it has moved. <Link to="/">Go back home.</Link></p>
    </div>
  );
}
