import React from 'react';
import { string, bool, array } from 'prop-types';
import { Spinner, Table, Alert } from 'react-bootstrap';

export class UsersTable extends React.Component {
  static propTypes = {
    error: string,
    isLoading: bool,
    users: array,
  }

  static defaultProps = {
    users: [],
    isLoading: false,
  }

  render() {
    const { isLoading, users, error } = this.props;

    return (
      <section>
        {error && <Alert variant="danger">{error}</Alert>}
        {isLoading && <Spinner animation="border" variant="primary" />}
        {!isLoading && <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ userId, firstName, lastName }) => (
              <tr key={userId}>
                <td>{userId}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
              </tr>
            ))}
          </tbody>
        </Table>}
      </section>
    );
  }
}
