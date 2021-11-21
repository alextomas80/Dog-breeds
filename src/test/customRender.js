import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "store/reducers";
import store from "store/store";

const defaultInitialState = store.getState();

export const FAKE_BREEDS = ["akita", "caniche"];

const AllTheProviders = ({ children, state = defaultInitialState, theme }) => {
  return (
    <Provider store={createStore(rootReducer, state, applyMiddleware(thunk))}>
      {children}
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: (props) => <AllTheProviders {...props} {...options?.props} />,
    ...options,
  });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
