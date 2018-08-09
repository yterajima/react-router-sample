import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <Fragment>
    <div className="home">Home</div>
    <ul>
      <li><Link to="/one">One</Link></li>
      <li><Link to="/two">Two</Link></li>
    </ul>
  </Fragment>
);

export const One = () => (
  <Fragment>
    <div className="one">One</div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/two">Two</Link></li>
    </ul>
  </Fragment>
);

export const Two = () => (
  <Fragment>
    <div className="two">Two</div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/one">One</Link></li>
    </ul>
  </Fragment>
);
