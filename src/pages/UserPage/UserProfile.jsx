import React from 'react';
import { Table } from 'react-bootstrap';
import map from 'lodash/map';
import { object } from 'prop-types';

const propTypes = {
  user: object.isRequired,
}

export const UserProfile = ({ user }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Field</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {map(user, (value, key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

UserProfile.propTypes = propTypes;
