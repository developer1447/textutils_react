import "./App.css";

import { useState } from "react";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#020334";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
    {/* // <Router>
      
    //     <Routes>
    //       <Route exact path="/about" element={<About mode={mode} />} />

    //       <Route */}
    {/* //        exact path="/"
    //         element={ */}
            
    {/* //         }
    //       />
    //     </Routes> */}
      
    {/* // </Router> */}
    <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3"></div>
        <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}/>
              /div
              </>
  );
}

export default App;
