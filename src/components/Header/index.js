import React from 'react';
import {Link, withRouter} from "react-router-dom";

const Header = (props) => (
  <header>
    <h1>{props.location.pathname === '/' ? 'quotation' : <Link to="/">quotation</Link>}</h1>
  </header>
);

export default withRouter(Header);
