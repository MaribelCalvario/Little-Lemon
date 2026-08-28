import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly snaps the window viewport back to coordinates (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers automatically every time the URL path changes

  return null; // This component doesn't need to render any HTML visual design
}

export default ScrollToTop;