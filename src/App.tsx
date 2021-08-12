import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
