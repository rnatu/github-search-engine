import "./styles.scss";

import searchError from "../../assets/images/search-error.svg";

export function NotFound() {
  return (
    <div className="data-not-found">
      <img src={searchError} alt="" />
      <h2>Oops, something wrong happened</h2>
      <h3>Please, Try search again</h3>
    </div>
  );
}
