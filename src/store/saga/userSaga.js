import { takeLatest, all, call, put } from 'redux-saga/effects';
import get from 'lodash/get';

import { ALL_USERS_REQUEST_LOADING, USER_REQUEST_LOADING } from '../types';
import { loadUsersSuccess, loadUsersFail, loadUserSuccess, loadUserFail } from '..';
import * as services from '../services';

export function* loadUsers({ payload }) {
  try {
    const { data } = yield call(services.loadUsers, payload);
    if (data.length === 0) {
      throw new Error('No data found');
    }
    const action = loadUsersSuccess(data);
    yield put(action);
  } catch (error) {
    const message = get(error, 'response.data.message', error.message);
    const action = loadUsersFail(message)
    yield put(action);
  }
}

export function* loadUser({ payload }) {
  try {
    const { data } = yield call(services.loadUser, payload);
    const action = loadUserSuccess(data);
    yield put(action);
  } catch (error) {
    const message = get(error, 'response.data.message', error.message);
    const action = loadUserFail(message)
    yield put(action);
  }
}

export function* watchLoadUsers () {
    yield takeLatest(ALL_USERS_REQUEST_LOADING, loadUsers);
}

export function* watchLoadUser () {
    yield takeLatest(USER_REQUEST_LOADING, loadUser);
}

export function* usersSaga() {
  yield all([
    watchLoadUsers(),
    watchLoadUser(),
    // We can place other users sagas here.
  ]);
}
