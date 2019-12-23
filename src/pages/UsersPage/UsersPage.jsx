import React from 'react';
import { func, string, bool, array } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadUsersRequest, isLoadingUsers, getUsers, getUsersError } from '../../store';

import { UsersTable } from './UsersTable';

export class UsersPage extends React.Component {
  static propTypes = {
    loadUsers: func.isRequired,
    error: string,
    isLoading: bool,
    users: array,
  }

  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    const { isLoading, error, users } = this.props;

    return (
      <>
        <h1>Lorem Ipsum (users page)</h1>
        <UsersTable
          isLoading={isLoading}
          error={error}
          users={users}
        />
      </>
    );
  }
}

export const mapDispatch = (dispatch) => bindActionCreators({ loadUsers: loadUsersRequest }, dispatch);

export const mapState = (state) => ({
  error: getUsersError(state),
  users: getUsers(state),
  isLoading: isLoadingUsers(state),
})

export default connect(mapState, mapDispatch)(UsersPage);
