import "./styles.scss";

export function SearchCard(props: any) {
  return (
    <main className="search-content">
      <div className="search-card">
        <header>
          <a href="/">ignite-aulas</a>
          <div>
            <span>Created At - 08/03/2021</span>
            <span>Updated At - 07/07/2021</span>
          </div>
        </header>

        <div className="resume">
          <p>
            Essa é uma aplicação onde o meu principal objetivo foi adicionar
            features a um projeto já existente. Utilizei como base a minha
            solução desenvolvida do desafio obrigatório:
            ignite-desafio-criando-aplicacao-do-zero"
          </p>
          <span>Language - JavaScript</span>
        </div>
      </div>
    </main>

    
  );
}
