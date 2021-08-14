import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { SearchCard } from "../../components/SearchCard";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";

import gitRepositoryIcon from "../../assets/images/git-repository-icon.svg";
import gitStarIcon from "../../assets/images/git-star-icon.svg";

import "./styles.scss";

type ParamType = {
  user: string;
};

type UserDataType = {
  login: string;
  name: string;
  location: string;
  bio: string;
  avatar_url: string;
  html_url: string;
};

export function SearchPage() {
  const { user } = useParams<ParamType>();

  const [searchOption, setSearchOptions] = useState("");
  const [userData, setUserData] = useState({} as UserDataType);
  const [isDataFound, setIsDataFound] = useState<Boolean>();

  useEffect(() => {
    const source = axios.CancelToken.source();

    (async function getUserData() {
      try {
        const { data } = await api.get(`https://api.github.com/users/${user}`, {
          cancelToken: source.token,
        });

        setUserData(data);

        setSearchOptions("");

        setIsDataFound(true);
      } catch (err) {
        setIsDataFound(false);
      }
    })();

    return () => {
      source.cancel();
    };
  }, [user]);

  return (
    <>
      <Header />

      {isDataFound === undefined && <Loading />}

      {isDataFound === false && <NotFound />}

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
              <button onClick={() => setSearchOptions("repository")}>
                <img src={gitRepositoryIcon} alt="Repository icon" />
                Search for Repositories
              </button>
              <button onClick={() => setSearchOptions("starred")}>
                <img src={gitStarIcon} alt="Star icon" />
                Search for Starred
              </button>
            </div>
          </section>

          {searchOption && (
            <div className="repository-container">
              <SearchCard login={userData.login} searchBy={searchOption} />
            </div>
          )}
        </main>
      )}
    </>
  );
}
