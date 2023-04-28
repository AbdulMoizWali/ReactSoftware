import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import Store from './Redux/Store/Store';
import AppRouter from './Config/AppRouter';

function App() {
  return (
    <>
      <Provider store={Store} >
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
