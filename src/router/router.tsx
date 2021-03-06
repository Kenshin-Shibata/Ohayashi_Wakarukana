import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { homeRoutes } from "./HomeRouter";

export const Router: VFC = memo(() => {
    return (
        <Switch>
          <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map(route => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
        </Switch>
    )
})