import { Redirect, Route, Switch } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import Allquotes from "./pages/Allquotes";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route exact path="/quotes">
          <Allquotes />
        </Route>
        <Route path="/quotes/:id">
          <QuoteDetail />
        </Route>
        <Route exact path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
