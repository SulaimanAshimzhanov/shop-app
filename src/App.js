import "./App.scss";
import useUser from "./modules/useUser";
import Routes from "./routes/Routes";



function App() {
  useUser()

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
