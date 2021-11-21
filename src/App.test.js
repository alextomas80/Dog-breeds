import App from "./App";
import { FAKE_BREEDS, render, screen } from "test/customRender";

const renderApp = (customState) =>
  render(<App />, {
    props: {
      state: {
        breeds: { loading: true, data: FAKE_BREEDS, ...customState },
      },
    },
  });

describe("App", () => {
  test("la aplicación está cargando", async () => {
    renderApp({ loading: true });

    const spinnerElement = screen.getByText(/loading data/i);
    expect(spinnerElement).toBeInTheDocument();
  });

  test("la aplicación ha cargado la información básica", async () => {
    renderApp({ loading: false });

    const chatContainer = await screen.findByLabelText("breed-selector");

    expect(chatContainer).toBeInTheDocument();
  });

  test("la aplicación muestra un error", async () => {
    renderApp({ loading: false, error: true });

    const errorElement = await screen.findByText(/error/i);
    expect(errorElement).toBeInTheDocument();
  });
});
