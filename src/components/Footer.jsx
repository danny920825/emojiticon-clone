import React from "react";

const footerStyle = {
  position: "absolute",
  bottom: 0,
  width: "99%",
//   height: "50px",
  backgroundColor: "#f5f5f5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: "1px 0 0 0",
  borderColor: "#e7e7e7",
  flexDirection: "column",
//   padding: "10px 0",
};

const parragraphStyle = {
    margin: "0",
    padding: "0",
    marginBottom: "10px",
    fontSize: "0.8rem",
    color: "#666",
    textAlign: "center",
    lineHeight: "1.5",
    fontWeight: "300",
    letterSpacing: "0.5px",
    fontFamily: "sans-serif",
}

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={parragraphStyle}>
        Made with{" "} <span role="img" aria-label="love">❤️</span> by{" "} <a href="https://twitter.com/Danny_920825" target="_blank" rel="noopener noreferrer">Danny_920825</a>
      </p>
      <p style={parragraphStyle}>
        Agradecimientos a{" "} <a href="https://twitter.com/sotoplatero" target="_blank" rel="noopener noreferrer">Soro Platero</a> por su proyecto que sirvió de inspiracion de{" "} <a href="https://emojiton.vercel.app" target="_blank" rel="noopener noreferrer">Emojiton</a>
      </p>
    </footer>
  );
};

export default Footer;