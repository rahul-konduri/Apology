import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";

// function InteractiveFace({ onCry }) {
//   const [isCrying, setIsCrying] = useState(false);
//   const faceRef = useRef(null);

//   const handleClick = () => {
//     setIsCrying(true);
//     if (onCry) onCry();

//     // Add shake animation
//     if (faceRef.current) {
//       faceRef.current.classList.remove("shake");
//       void faceRef.current.offsetWidth; // Trigger reflow
//       faceRef.current.classList.add("shake");
//     }

//     // Auto reset after 3 seconds
//     setTimeout(() => {
//       setIsCrying(false);
//     }, 3000);
//   };

//   return (
//     <div
//       ref={faceRef}
//       className={`face-container ${isCrying ? "crying" : ""}`}
//       onClick={handleClick}
//     >
//       <div className="face">
//         {/* Replace with your actual face image */}
//         <img src="/your-face-image.jpg" alt="My face" />
//       </div>
//       <div className={`tears left-tear ${isCrying ? "active" : ""}`}></div>
//       <div className={`tears right-tear ${isCrying ? "active" : ""}`}></div>
//       <p className="tap-instruction">Tap me</p>
//     </div>
//   );
// }

function Home() {
  const navigate = useNavigate();
  const messages = [
    "Hey Potti, First of all, I'm truly sorry.",
    "I never intended to hurt you!",
    "Please forget the thing which happened between us, So does I.",
    "I completely understand your feelings, and I realize that what I said hurt you deeply.",
    "As someone who knows you well, I truly feel your pain.",
    "My only concern is not to loose our friendship bond!",
    "Hoping that you will consider this apology, and forgive me!!",
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleNext = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
    } else {
      navigate("/acknowledgment");
    }
  };

  return (
    <div className="container home-background">
      <h1 className="title sorry-title">I'm Sorry</h1>
      <p className="message">{messages[currentMessageIndex]}</p>
      <button className="button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

function Acknowledgment() {
  const sendWhatsAppMessage = () => {
    const phoneNumber = "917330702896";
    const message = encodeURIComponent("Hii ra!!!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="container acknowledgment-background">
      <h1 className="title thankyou-title">Thank You!</h1>
      <p className="message">Thoda sa formal hua, but ignore!!</p>
      <button className="button" onClick={sendWhatsAppMessage}>
        You're lucky I'm nice 🙃
      </button>
      <Link to="/" className="button">
        Go Back
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acknowledgment" element={<Acknowledgment />} />
      </Routes>
    </Router>
  );
}

export default App;
