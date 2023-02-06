import "@/styles/globals.css";
import { store } from "../src/store";
import { Provider } from "react-redux";
import Header from "@/Components/Header";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <Header/>
      <Component {...pageProps} />
    </Provider>
  );
}
