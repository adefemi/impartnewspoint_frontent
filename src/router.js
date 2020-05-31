import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import MainLayout from "./components/layouts/mainlayout";
import SingleBlog from "./components/pages/SingleBlogPage/singleBlog";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <MainLayout>
              <Route path="/" exact component={Home} />
              <Route path="/:slug" exact component={SingleBlog} />
              <Route
                path="/test"
                component={() => <h1>This is test page</h1>}
              />
            </MainLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
