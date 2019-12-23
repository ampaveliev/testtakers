import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const propTypes = {
  links: arrayOf(
    shape({
      path: string,
      title: string,
    })
  ).isRequired
}

export const BreadCrumbs = ({ links }) => (
  <nav aria-label="Breadcrumb" className="breadcrumb">
    <ol className="breadcrumbs-container">
      {links.map((link, index) => (
        <li className="item" key={link.path}>
          <Link
            to={link.path}
            className="link"
            aria-current={index === (links.length - 1) && 'page'}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ol>
  </nav>
);

BreadCrumbs.propTypes = propTypes;
