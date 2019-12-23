import React from 'react';
import { Link } from 'react-router-dom';

import { BreadCrumbs } from '../../components';

export default function() {
  const breadcrumbs = [{ path: '/', title: 'Home' }];

  return (
    <>
      <h1>Home page</h1>
      <BreadCrumbs links={breadcrumbs} />
      <Link to="/users">Go to the users list</Link>
    </>
  );
}

