import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { GlobalProvider } from "./library/globalstate";

function App() {
  return (
    <GlobalProvider>
      <div className="homepageContainer">
        <Homepage />
      </div>
    </GlobalProvider>
  );
}

export default App;
