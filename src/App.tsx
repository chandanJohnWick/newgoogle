import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/heroSection/Section";
import Popup from "./components/popup/Popup"; // Import the Popup component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in, e.g., by checking for a session or JWT token
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignIn = () => {
    // Redirect to Google OAuth or any other sign-in method
    window.location.href = "http://localhost:6005/auth/google";
  };

  return (
    <>
      <div className="bg-gray-900 mx-auto pr-40 pl-40 min-h-screen pt-10">
        <Navbar />
        <Section />
        {!isLoggedIn && <Popup onSignIn={handleSignIn} />}
      </div>
    </>
  );
}

export default App;
