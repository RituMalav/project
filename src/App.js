import "./App.css";

import SignUp from "./Pages/Sign-in/signup";
import SignIn from "./Pages/Sign-in/signin";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
