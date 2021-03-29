import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home.container";
import CardsList from "./pages/CardsList/CardsList.container";
import SingleCard from "./pages/SingleCard/SingleCard.container";
import { SessionStorageManager } from "./utils/dataManagers";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cards/add">
          <SingleCard dataManager={SessionStorageManager} />
        </Route>
        <Route path="/cards/:id/edit">
          <SingleCard dataManager={SessionStorageManager} />
        </Route>
        <Route path="/cards">
          <CardsList dataManager={SessionStorageManager} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
