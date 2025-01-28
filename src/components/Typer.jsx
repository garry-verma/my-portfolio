import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typer = () => {
  // Create a ref to attach Typed.js
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        "Coder",
        "Software Developer",
        "Full Stack Developer",
        "Web Developer",
        "Python Coder",
        "Backend Developer",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="role-container">
      <span className="role" ref={typedRef}></span>
    </div>
  );
};

export default Typer;
