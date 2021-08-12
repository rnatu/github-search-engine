import "./styles.scss";

import copyImg from "../../assets/images/github-icon.svg";
import closeIcon from "../../assets/images/close-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";

export function Header() {
  return (
    <header>
      <div className="logo">
        <p>
          <strong>Github</strong> Search Engine
        </p>
        <img src={copyImg} alt="Github logo" />
      </div>

      <div className="search-bar">
        <form>
          <div className="icon-search">
            <img src={searchIcon} alt="search icon" />
            <input type="text" placeholder="username" />
          </div>
          <div className="actions-btn">
            <button className="clear-btn">
              <img src={closeIcon} alt="clear input" />
            </button>
            <button type="submit" className="submit-btn">Search</button>
          </div>
        </form>
      </div>
    </header>
  );
}
