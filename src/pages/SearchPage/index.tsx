import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { SearchCard } from "../../components/SearchCard";
import { Header } from "../../components/Header";
import { Loading } from '../../components/Loading'

import gitRepositoryIcon from "../../assets/images/git-repository-icon.svg";
import gitStarIcon from "../../assets/images/git-star-icon.svg";
import searchError from "../../assets/images/search-error.svg";

import "./styles.scss";

type ParamType = {
  user: string;
};

type UserDataType = {
  name: string;
  location: string;
  bio: string;
  avatar_url: string;
  html_url: string;
};

export function SearchPage() {
  const [searchOption, setSearchOptions] = useState("");
  const [userData, setUserData] = useState({} as UserDataType);
  const { user } = useParams<ParamType>();
  const [isDataFound, setIsDataFound] = useState<Boolean>();

  useEffect(() => {
    (async function getUserData() {
      try {
        const { data } = await api.get(`https://api.github.com/users/${user}`);

        setUserData(data);

        setSearchOptions("");

        setIsDataFound(true);
      } catch (err) {
        setIsDataFound(false);
      }
    })();
  }, [user]);

  return (
    <>
      <Header />

      {isDataFound === undefined && (
        <Loading />
      )}

      {isDataFound === false && (
        <div className="data-not-found">
          <img src={searchError} alt="" />
          <h2>Oops, something wrong happened</h2>
          <h3>Please, Try search again</h3>
        </div>
      )}

      {isDataFound && (
        <main className="user-search">
          <section className="user-dashboard">
            <div className="user-card">
              <div className="avatar">
                <img src={userData.avatar_url} alt="Profile avatar" />
              </div>
              <div className="user-description">
                <h1>
                  {userData.name} <span>{userData.location}</span>
                </h1>
                <p>{userData.bio}</p>

                <p>
                  Visit the full Github profile by{" "}
                  <a href={userData.html_url}>clicking here</a>
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
              <SearchCard data={"sdad"} />
              <SearchCard data={"sdad"} />
            </div>
          )}

          {searchOption === "starred" && (
            <div className="repository-container">
              <h1>22 Starreds</h1>
              <SearchCard data={"sdad"} />
              <SearchCard data={"sdad"} />
            </div>
          )}
        </main>
      )}
    </>
  );
}
