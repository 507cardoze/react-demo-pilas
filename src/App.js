import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Spinner } from "./components/with-spinner/with-spinner.component";
import Navigation from "./components/nav-bar";
import PageLayout from "./components/page-layout";

function App() {
  const Home = lazy(() => import("./pages/home"));
  const Pilas = lazy(() => import("./pages/pilas"));
  const Integrantes = lazy(() => import("./pages/integrantes"));
  const Colas = lazy(() => import("./pages/cola"));
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Navigation />
        <PageLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pilas" component={Pilas} />
            <Route path="/colas" component={Colas} />
            <Route path="/integrantes" component={Integrantes} />
            <Route
              path="*"
              render={(props) => <Redirect to="/" {...props} />}
            />
          </Switch>
        </PageLayout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
