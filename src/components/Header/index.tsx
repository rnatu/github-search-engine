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

    if (user === "") return;

    history.push(`/${user}`);
  }

  function handleClearInput(event: FormEvent) {
    event.preventDefault();
    setUser("");
  }

  return (
    <header>
      <div className="logo">
        <a href="/">
          <h1>
            <strong>Github</strong> Search Engine
          </h1>
          <img src={copyImg} alt="Github logo" />
        </a>
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
            <button className="clear-btn" onClick={(e) => handleClearInput(e)}>
              <img src={clearIcon} alt="clear input" />
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
