export const getUserSection = (state) => state.selectedUsers || {};

const createUserSelector = (key) => (state = {}) => {
  const section = getUserSection(state);

  return section[key];
}

export const getUser = createUserSelector('data') || [];
export const getUserError = createUserSelector('error');
export const isLoadingUser = createUserSelector('loading');
