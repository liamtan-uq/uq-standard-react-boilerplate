import React from "react";

import Logo from "../static/uq-logo-white.svg";

const styles: any = {
  root: {
    background: "#51247A",
    width: "100%",
    display: "flex",
    padding: "1rem"
  },
  logo: {
    height: "3rem"
  }
};

export default function AppBarSticky() {
  return (
    <header style={styles.root}>
      <img src={Logo} alt="logo" style={styles.logo} />
    </header>
  );
}
