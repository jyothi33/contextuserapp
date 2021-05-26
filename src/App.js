import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
