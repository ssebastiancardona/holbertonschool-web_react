import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.header)}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>

        {user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logOut} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </header>
    )
  }
}

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  header: {
    margin:'20px 20px 0 20px',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'left',
    color: cssVars.mainColor,
    fontSize: "20px",
  },

  img: {
    width: "200px",
  },

  h1: {
    margin: 'auto auto auto 0',
  },

  logoutSection: {
    alignSelf: "flex-end",
    position: "absolute",
    paddingRight: "10px",
    color: "black",
    right: 0,
    fontSize: "16px",
  },
  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
  },
});

Header.contextType = AppContext;

export default Header;
