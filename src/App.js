import Logo from "./assets/profile.jpg";
import Instagram from "./assets/instagram.svg";
import Linkedin from "./assets/linkedin.svg";
import Github from "./assets/github.svg";
import Twitter from "./assets/twitter.svg";
import "./App.scss";
import { click } from "@testing-library/user-event/dist/click";
import { HashRouter } from "react-router-dom";

function App() {
  function Button({ children, onClick }) {
    return <button onClick={onClick}>{children}</button>;
  }

  function Icon({ imgSrc, link }) {
    return (
      <a href={link}>
        <img src={imgSrc} width="24px" height="24px" />
      </a>
    );
  }

  return (
    // Conteudo todo
    <div className="App">
      {/* centralizacao */}
      <div className="app-container">
        {/* texto e imagem */}
        <div className="app-container-text-logo">
          <div className="app-logo">
            <img src={Logo} alt="" width="200px" height="200px" />
          </div>

          <a href="https://www.instagram.com"> @instagram </a>
        </div>

        {/* buttons e links */}
        <div className="app-logo-btn">
          <Button
            onClick={() =>
              window.navigation.navigate(
                "https://www.instagram.com/davcurvello"
              )
            }
          >
            Instagram
          </Button>
          <Button
            onClick={() =>
              window.navigation.navigate("https://twitter.com/davcurvello")
            }
          >
            Twitter
          </Button>
          <Button
            onClick={() =>
              window.navigation.navigate("https://www.linkedin.com")
            }
          >
            Linkedin
          </Button>
          <Button
            onClick={() => window.navigation.navigate("https://www.github.com")}
          >
            GitHub
          </Button>
        </div>

        {/* icones e buttons */}
        <div className="app-icon-btn">
          <Icon
            imgSrc={Instagram}
            link="https://www.instagram.com/davcurvello"
          />
          <Icon
            imgSrc={Linkedin}
            link="https://www.linkedin.com/in/davi-curvello/"
          />
          <Icon imgSrc={Github} link="https://www.github.com/davcurvello" />
          <Icon imgSrc={Twitter} link="https://twitter.com/davcurvello" />
        </div>
      </div>
    </div>
  );
}

export default App;
