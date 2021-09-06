import "./App.scss";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetail from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Switch>
            <Route exact path="/create" component={Create} />
          </Switch>
          <Switch>
            <Route exact path="/blogs/:id" component={BlogDetail} />
          </Switch>
          <Switch>
            <Route path="/blogs/*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
