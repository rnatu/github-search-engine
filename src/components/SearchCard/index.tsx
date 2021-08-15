import axios from "axios";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Loading } from "../Loading";

import "./styles.scss";

interface SearchCardProps {
  login: string;
  searchBy: string;
}

type RepositoriesType = {
  id: number;
  name: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  description: string;
  language: string;
};

export function SearchCard({ login, searchBy }: SearchCardProps) {
  const [searchData, setSearchData] = useState<RepositoriesType[]>([]);
  const [isDataFound, setIsDataFound] = useState<Boolean>();

  useEffect(() => {
    const source = axios.CancelToken.source();
    setIsDataFound(undefined);

    (async function getSearchData() {
      try {
        if (searchBy === "repository") {
          const { data } = await api.get(
            `https://api.github.com/users/${login}/repos`,
            { cancelToken: source.token }
          );

          setSearchData(data);
          setIsDataFound(true);
          return;
        }

        if (searchBy === "starred") {
          const { data } = await api.get(
            `https://api.github.com/users/${login}/starred`,
            { cancelToken: source.token }
          );

          setSearchData(data);
          setIsDataFound(true);
          return;
        }
      } catch (err) {
        setIsDataFound(false);
      }
    })();

    return () => {
      source.cancel();
    };
  }, [login, searchBy]);

  function dateFormatter(date: string): string {
    const currentLocale = navigator.language ? navigator.language : "pt-BR";

    const formattedDate = new Date(date).toLocaleDateString(currentLocale);

    return formattedDate;
  }

  return (
    <>
      {isDataFound === undefined ? (
        <Loading />
      ) : (
        <>
          <div className="amount-title">
            {
              <h1>
                {searchBy === "repository" ? "Repositories" : "Starred"} -{" "}
                {searchData.length}
              </h1>
            }
          </div>

          <main className="search-content">
            {searchData.map((result) => (
              <div className="search-card" key={result.id}>
                <header>
                  <a href={result.html_url}>{result.name}</a>
                  <div>
                    <span>Created At - {dateFormatter(result.created_at)}</span>
                    <span>Updated At - {dateFormatter(result.updated_at)}</span>
                  </div>
                </header>

                <div className="resume">
                  <p>{result.description}</p>
                  <span>{result.language}</span>
                </div>
              </div>
            ))}
          </main>
        </>
      )}
    </>
  );
}
