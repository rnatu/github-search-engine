import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { KeyboardEvent } from "react";

import copyImg from "../../assets/images/github-icon.svg";
import clearIcon from "../../assets/images/clear-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";

import "./styles.scss";

export function Header() {
  const [user, setUser] = useState("");
  const history = useHistory();

  function handleEnterSubmit(event: KeyboardEvent) {
    if(event.key === 'Enter') {
      handleSearchUser(event);
    }
  }

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
    <header className="header-menu">
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
              onChange={(event) => setUser(event.target.value)}
              value={user}
              onKeyDown={(event) => handleEnterSubmit(event)}
            />
          </div>
          <div className="actions-btn">
            <button className="clear-btn" onClick={(event) => handleClearInput(event)}>
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
