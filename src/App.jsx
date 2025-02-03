import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Notifications from "./Components/Notifications/Notifications";
import { GlobalProvider } from "./library/globalstate";

function App() {
  return (
    <GlobalProvider>
      <div className="homepageContainer">
        <Homepage />
        <Notifications />
      </div>
    </GlobalProvider>
  );
}

export default App;
