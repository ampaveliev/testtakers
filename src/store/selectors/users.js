export const getUsersSection = (state) => state.users || {};

const createUsersSelector = (key) => (state = {}) => {
  const section = getUsersSection(state);

  return section[key];
}

export const getUsers = createUsersSelector('data') || [];
export const getUsersError = createUsersSelector('error');
export const isLoadingUsers = createUsersSelector('loading');
