import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import AppContext from "../App/AppContext";

function Footer() {
  return(
    <AppContext.Consumer>
      {(context) => {
        return (
          <div className="footer">
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {context.user.isLoggedIn && <a href="#">Contact us</a>}
          </div>
        );
      }}
    </AppContext.Consumer>
  )
}

export default Footer;
