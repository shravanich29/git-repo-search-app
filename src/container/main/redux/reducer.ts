const default_state: any = {
  repoTableData: [],
};
export const rootReducer = function (state = default_state, action: any) {
  switch (action.type) {
    case "SET_SEARCH_REPOS_BY_USER_NAME":
      return Object.assign({}, state, {
        repoTableData: action.payload,
        loading: false,
      });
    // case "SET_LOADING":
    case "GET_SEARCH_REPOS_BY_USER_NAME":
      return Object.assign({}, state, {
        loading: true,
      });
    default:
      return state;
  }
};
