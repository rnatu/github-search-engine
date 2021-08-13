import "./styles.scss";

import copyImg from "../../assets/images/github-icon.svg";
import clearIcon from "../../assets/images/clear-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";

import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

export function Header() {
  const [user, setUser] = useState("");
  const history = useHistory();

  function handleSearchUser(event: FormEvent) {
    event.preventDefault();

    history.push(`/${user}`);
  }

  return (
    <header>
      <div className="logo">
        <p>
          <strong>Github</strong> Search Engine
        </p>
        <img src={copyImg} alt="Github logo" />
      </div>

      <div className="search-bar">
        <form onSubmit={handleSearchUser}>
          <div className="icon-search">
            <img src={searchIcon} alt="search icon" />
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </div>
          <div className="actions-btn">
            <button className="clear-btn">
              <img
                src={clearIcon}
                alt="clear input"
                onClick={() => setUser("")}
              />
            </button>
            <button type="submit" className="submit-btn">
              Search
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
