import "./styles.scss";

import copyImg from "../../assets/images/github-icon.svg";
import closeIcon from "../../assets/images/close-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";

import { FormEvent } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export function Header() {

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const code = query.get("code");

  if (!code) console.log("nada ainda");

  console.log(code);

  // if (code) {
  //   axios
  //     .post("https://github.com/login/oauth/access_token", null, {
  //       params: {
  //         client_id: "70019ed02828eaa939a8",
  //         client_secret: "1897b6221e938325e2c32b36172005fc624abde2",
  //         code: code,
  //       },
  //     })
  //     .then((response) => console.log(response.status))
  //     .catch((err) => console.log(err));
  // }

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

      <a href="https://github.com/login/oauth/authorize?client_id=70019ed02828eaa939a8">
        <button>Login with github</button>
      </a>
    </header>
  );
}
