import { Header } from "../../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

//!TO REMOVE
import profileImage from "../../assets/profile21.png";
import gitRepositoryIcon from "../../assets/images/git-repository-icon.svg";
import gitStarIcon from "../../assets/images/git-star-icon.svg";

import "./styles.scss";
import { useParams } from "react-router-dom";
import { SearchCard } from "../../components/SearchCard";

type ParamType = {
  user: string;
};

export function SearchPage() {
  const [searchOption, setSearchOptions] = useState("");
  const { user } = useParams<ParamType>();

  const { setUsername } = useUser();

  useEffect(() => {
    setUsername(user);
    setSearchOptions('');
  }, [setUsername, user]);

  return (
    <>
      <Header />
      <main className="user-search">
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

        {searchOption === "repositories" && (
          <div className="repository-container">
            <h1>21 Repositories</h1>
            <SearchCard data={'sdad'}/>
            <SearchCard data={'sdad'}/>
          </div>
        )}

        {searchOption === "starred" && (
           <div className="repository-container">
           <h1>22 Starreds</h1>
           <SearchCard data={'sdad'}/>
           <SearchCard data={'sdad'}/>
         </div>
        )}
      </main>
    </>
  );
}
