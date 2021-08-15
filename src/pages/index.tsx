import { Header } from "../components/Header";

import demoImage from "../assets/images/demo-image.jpg";

import "./styles.scss";

export function Home() {
  return (
    <>
      <Header />

      <main className="presentation">
        <section className="main-title">
          <h1>Github Search Engine</h1>
          <span>A simple and efficient search</span>
        </section>

        <section className="main-info">
          <div className="description">
            <p>
              GitHub is a web-based version-control and collaboration platform
              for software developers. Microsoft, the biggest single contributor
              to GitHub, initiated an acquisition of GitHub for $7.5 billion in
              June, 2018. GitHub, which is delivered through a
              software-as-a-service (SaaS) business model, was started in 2008
              and was founded on Git, an open source code management system
              created by Linus Torvalds to make software builds faste
            </p>
            <p>
              Git is used to store the source code for a project and track the
              complete history of all changes to that code. It allows developers
              to collaborate on a project more effectively by providing tools
              for managing possibly conflicting changes from multiple
              developers. GitHub allows developers to change, adapt and improve
              software from its public repositories for free, but it charges for
              private repositories, offering various paid plans.
            </p>
          </div>
          <div className="demo-image">
            <p>Take a look at how it works.</p>
            <img src={demoImage} alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
