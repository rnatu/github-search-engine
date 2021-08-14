import searchError from "../../assets/images/search-error.svg";

import "./styles.scss";

export function NotFound() {
  return (
    <div className="data-not-found">
      <img src={searchError} alt="magnifying glass" />
      <h2>Oops, something wrong happened</h2>
      <h3>Please, Try search again</h3>
    </div>
  );
}
