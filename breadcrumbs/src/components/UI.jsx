import { Link } from "react-router-dom";

const UI = () => (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <ul>
            <li>
              <Link to="/users/john">John</Link>
            </li>
            <li>
              <Link to="/users/mike">Mike</Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );

  export default UI