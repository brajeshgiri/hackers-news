import React from "react";
import { Route, Switch } from "react-router"
import NewsContainer from "./components/news-container/NewsContainer";
import { Provider } from "react-redux";
import store from './store';
const App = () => (
  <Provider store={store}>
    <Switch>
      <Route path="/app/" exact={true} component={(props) => <NewsContainer {...props} />}></Route>
      <Route path="/app/:pageNo" component={() => <NewsContainer />}>
      </Route>
    </Switch>
  </Provider>
);

export default App;
