import "./styles.scss";

export function Loading() {
  return (
    <div className="loading">
      <div className="lds-dual-ring" />
      <h2>Carregando...</h2>
    </div>
  );
}
