import { combineReducers } from 'redux';

import { users } from './user';
import { selectedUsers } from './selected-user';

export const reducer = combineReducers({ users, selectedUsers });
/**
 * We can include different reducers here, for instance router reducer, form reducer or write our own reducers.
 * We will change code here to:
 * ```js
 * import { combineReducers } from 'redux';
 * import { routerReducer } from 'connected-router';
 * 
 * export const reducer = combineReducers({
 *   router: routerReducer,
 *   users,
 *   form: // ...
 * });
 * ```
 * So adding new reducers won't affect existing code.
 */
