import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/api/products">
            <Main />
          </Route>

          <Route exact path="/api/product/:_id">
            <Detail />
          </Route>

          <Route path="/product/update/:_id">
            <Update />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
