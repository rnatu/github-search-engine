import { Header } from "../../components/Header";
import "./styles.scss";

//TO REMOVE
import profileImage from "../../assets/profile21.png";

import gitRepositoryIcon from "../../assets/images/git-repository-icon.svg";
import gitStarIcon from "../../assets/images/git-star-icon.svg";
import { useState } from "react";

export function SearchPage() {
  const [searchOption, setSearchOptions] = useState("");

  return (
    <>
      <Header />
      <main>
        <section className="user-dashboard">
          <div className="user-card">
            <div className="avatar">
              <img src={profileImage} alt="Profile avatar" />
            </div>
            <div className="user-description">
              <h1>
                Renato Xavier <span>Brasil - SP</span>
              </h1>
              <p>
                A JavaScript lover, motivated by solve problems and create
                solutions! Currently learning and practicing ReactJS, NextJS and
                TypeScript
              </p>

              <p>
                Visit the full Github profile by <a href="/">clicking here</a>
              </p>
            </div>
          </div>
          <div className="user-search-options">
            <button onClick={() => setSearchOptions("repositories")}>
              <img src={gitRepositoryIcon} alt="Repository icon" />
              Search for Repositories
            </button>
            <button onClick={() => setSearchOptions("starred")}>
              <img src={gitStarIcon} alt="Star icon" />
              Search for Starred
            </button>
          </div>
        </section>

        {searchOption === "repositories" && <h1>Repositorios</h1>}

        {searchOption === "starred" && <h1>Starred</h1>}
      </main>
    </>
  );
}
