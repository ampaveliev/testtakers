import { usersSaga } from './userSaga';

export const rootSaga = usersSaga;
/**
 * Here we can place other sagas. The code in this case will look like:
 * ```js
 * import { all } from 'redux-saga/effects';
 * 
 * import { usersSaga } from './userSaga';
 * import { roleSaga } from './roleSaga';
 * //...
 * 
 * export function* rootSaga() {
 *   yield all([
 *     usersSaga(),
 *     roleSaga(),
 *     //...
 *   ]);
 * }
 * ```
 */

