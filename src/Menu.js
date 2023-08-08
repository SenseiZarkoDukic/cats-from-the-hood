import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="Menu">
      <h1 className="navigation">Navigation</h1>
      <ul className="navigation-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#AboutUs">About us</Link>
        </li>
        <li>Our cats</li>
        <li>Add new cat</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
}
