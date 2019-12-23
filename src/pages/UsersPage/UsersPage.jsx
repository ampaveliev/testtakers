import React from 'react';
import { func, string, bool, array } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadUsersRequest, isLoadingUsers, getUsers, getUsersError } from '../../store';
import { BreadCrumbs } from '../../components';

import { UsersTable } from './UsersTable';
import { UsersPagination } from './UsersPagination';

export class UsersPage extends React.Component {
  static propTypes = {
    loadUsers: func.isRequired,
    error: string,
    isLoading: bool,
    users: array,
  }

  breadcrumbs = [{ path: '/', title: 'Home' }, { path: '/users', title: 'Users' }];

  // Todo: move it to a store.
  state = {
    currentPage: 1,
    usersPerPage: 10,
  }

  componentDidMount() {
    const params = {
      offset: 0,
      limit: this.state.usersPerPage
    }
    this.props.loadUsers(params);
  }

  handleChangePage = (currentPage) => {
    const params = {
      offset: (currentPage - 1) * this.state.usersPerPage,
      limit: this.state.usersPerPage,
    }

    this.props.loadUsers(params);
    this.setState({ currentPage });
  }

  handleChangeCount = (count) => {
    this.setState({ usersPerPage: count });
  }

  render() {
    const { isLoading, error, users } = this.props;

    return (
      <>
        <BreadCrumbs links={this.breadcrumbs} />
        <h1>Users List</h1>
        {<UsersPagination 
          onChangePage={this.handleChangePage}
          currentPage={this.state.currentPage}
          onChangeCount={this.handleChangeCount}
        />}
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
});

export default connect(mapState, mapDispatch)(UsersPage);
