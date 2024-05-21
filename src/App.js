import React, { useRef, useState, useEffect } from "react";
import Header from "./header/Header";
import DisplayVideo from "./displayvideo/DisplayVideo";
import Movies from "./movies/Movies";

function App() {
  const [isSticky, setSticky] = useState(false);
  const navbarRef = useRef(null);
  const navbarTopPosition = useRef(0);

  const handleScroll = () => {
    if (navbarRef.current) {
      if (navbarTopPosition.current === 0) {
        navbarTopPosition.current = navbarRef.current.offsetTop;
      }
      console.log("Current scrollY:", window.scrollY);
      setSticky(window.scrollY > navbarTopPosition.current);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" overflow-y-auto overflow-x-hidden">
      <nav
        ref={navbarRef}
        className={`fixed top-0 w-screen z-10 text-white ${
          isSticky ? "duration-500  bg-[#192224]" : " duration-500"
        }`}
      >
        <Header />
      </nav>
      <main className="w-full h-full">
        <div className="z-0">
          <DisplayVideo />
        </div>

        <div className="h-screen w-full bg-gray-950">
          <Movies />
        </div>
      </main>
    </div>
  );
}

export default App;
