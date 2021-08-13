import "./styles.scss";

import copyImg from "../../assets/images/github-icon.svg";
import closeIcon from "../../assets/images/close-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";

import { FormEvent } from "react";

export function Header() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(event);
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
        <form onSubmit={handleSubmit}>
          <div className="icon-search">
            <img src={searchIcon} alt="search icon" />
            <input type="text" placeholder="username" />
          </div>
          <div className="actions-btn">
            <button className="clear-btn">
              <img src={closeIcon} alt="clear input" />
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
