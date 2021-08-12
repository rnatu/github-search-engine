import { Header } from "../components/Header";
import demoImage  from '../assets/images/demo-image.png';


export function Home() {
  return (
    <>
      <Header isHomePage />

      <main>
        <div className="title">
          <h1>Github</h1>
          <span>Where the world build software</span>
        </div>

        <div>
          <div className="description">
            <p>
              Millions of developers and companies build, ship, and maintain
              their software on GitHub—the largest and most advanced development
              platform in the world.
            </p>
            <p>
              It was commonly used to host open-source projects. As of January
              2020, GitHub reports having over 40 million users and more than
              190 million repositories (including at least 28 million public
              repositories). It is the largest source code host as of April 2020
            </p>
          </div>
          <div>
            <img src={demoImage} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}
