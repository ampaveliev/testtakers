import { takeLatest, all, call, put } from 'redux-saga/effects';

import { ALL_USERS_REQUEST_LOADING, USER_REQUEST_LOADING } from '../types';
import { loadUsersSuccess, loadUsersFail } from '..';
import * as services from '../services';

export function* loadUsers({ payload }) {
  try {
    const { data } = yield call(services.loadUsers, payload);
    const action = loadUsersSuccess(data);
    yield put(action);
  } catch (error) {
    const message = error.response.data && error.response.data.message;
    const action = loadUsersFail(message || error.message)
    yield put(action);
  }
}

export function* loadUser({ payload }) {
  const { data } = yield call(services.loadUser, payload);
  console.log(data)
  // todo
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
