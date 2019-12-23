import React from 'react';
import { func, string, bool, object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spinner, Alert } from 'react-bootstrap';

import { loadUserRequest, getUser, isLoadingUser, getUserError } from '../../store';
import { BreadCrumbs } from '../../components';

import { UserProfile } from './UserProfile';

function getFullName (firstName, lastName) {
  return [firstName, lastName].join(' ');
}

// TODO: user photo

export class UserPage extends React.Component {
  static propTypes = {
    loadUser: func.isRequired,
    error: string,
    isLoading: bool,
    user: object,
  }

  static defaultProps = {
    user: {}
  }

  componentDidMount() {
    const { match }= this.props; // react-router prop
    this.props.loadUser(match.params.userId);
  }

  render() {
    const { user, isLoading, error } = this.props;
    if (isLoading) {
      return <Spinner animation="border" variant="primary" />
    }

    const fullName = getFullName(user.firstName, user.lastName);
    const breadCrumbs = [
      { path: '/', title: 'Home' },
      { path: '/users', title: 'Users List' },
      { path: `/user/${this.props.match.params.userId}`, title: fullName }
    ];

    return (
      <>
        <BreadCrumbs links={breadCrumbs} />
        {error && <Alert variant="danger">{error}</Alert>}
        <h1>{fullName} Profile</h1>
        <UserProfile user={user} />
      </>
    );
  }
}

export const mapDispatchToProps = (dispatch) => bindActionCreators({ loadUser: loadUserRequest }, dispatch);
export const mapStateToProps = (state) => ({
  user: getUser(state),
  isLoading: isLoadingUser(state),
  error: getUserError(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
