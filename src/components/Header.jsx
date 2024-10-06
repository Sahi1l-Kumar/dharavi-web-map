import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const Header = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollThreshold = 1500;
  const overlayOpacity = Math.min(0.8, scrollPosition / scrollThreshold);

  return (
    <>
      <div className="hero-section">
        <div className="hero-background" />
        <div
          className="hero-overlay"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          }}
        />
        <div className="hero-content">
          <Typography variant="h3" color="white">
            Nasa Space App Challenge
          </Typography>
        </div>
      </div>
      <div className="main-content">{children}</div>
    </>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
