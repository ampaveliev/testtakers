import React from 'react';
import { func, number } from 'prop-types';
import { Pagination, Form } from 'react-bootstrap';
import isNaN from 'lodash/isNaN';

export class UsersPagination extends React.Component {
  static propTypes = {
    currentPage: number,
    onChangePage: func.isRequired,
    onChangeCount: func.isRequired,
    usersPerPage: number,
  }

  static defaultProps = {
    currentPage: 1,
  }

  state = {
    valid: true,
  }

  handleFirstClick = () => {
    const { onChangePage } = this.props;

    onChangePage(1);
  }

  handlePrevClick = () => {
    const { onChangePage, currentPage } = this.props;

    const newPage = currentPage > 1 ? currentPage - 1 : 1;
    onChangePage(newPage);
  }

  handleNextClick = () => {
    const { onChangePage, currentPage } = this.props;

    onChangePage(currentPage + 1);
  }

  handleChangeUsers = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      return this.setState({ valid: false });
    }

    this.setState({ valid: true });
    this.props.onChangeCount(value);
  }

  render() {
    return (
      <section>
        <Pagination>
          <Pagination.First onClick={this.handleFirstClick} />
          <Pagination.Prev onClick={this.handlePrevClick} />
          <Pagination.Item active>{this.props.currentPage}</Pagination.Item>
          <Pagination.Next onClick={this.handleNextClick} />
        </Pagination>

        <Form.Group controlId="users-per-page">
          <Form.Label>Users per page</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter amount of users"
            isInvalid={!this.state.valid}
            onChange={this.handleChangeUsers}
          />
        </Form.Group>
      </section>
    );
  }
}

