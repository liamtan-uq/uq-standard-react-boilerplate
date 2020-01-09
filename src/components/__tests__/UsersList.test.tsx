import React from "react";
import ReactDOM from "react-dom";
import UsersList from "../UsersList";

import { Provider as StoreProvider } from "react-redux";

import store from "../../reducers";

it("Renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StoreProvider store={store}>
      <UsersList />
    </StoreProvider>,
    div
  );
});
