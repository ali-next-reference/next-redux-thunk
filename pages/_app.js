import "../styles/globals.css";
import { Provider } from "react-redux";
import { useStore } from "../store";

function MyApp({ Component, pageProps }) {
  // add the redux provider here
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
