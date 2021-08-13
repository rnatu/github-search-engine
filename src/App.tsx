import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/UserContext";

import { Home } from "./pages";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:user" component={SearchPage} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
