import { put, takeEvery, fork, all } from "redux-saga/effects";

function* getReposByUserName(action: any) {
  try {
    const requestUrl: string = `https://api.github.com/users/${action?.userName}/repos`;
    const repos: any = yield fetch(requestUrl).then((response) =>
      response.json()
    );
    yield put({ type: "SET_SEARCH_REPOS_BY_USER_NAME", payload: repos });
  } catch (error) {
    yield put({ type: "SET_SEARCH_REPOS_BY_USER_NAME", payload: [] });
    yield put({
      type: "SET_LOADING",
      payload: false,
    });
  }
}

function* getReposByUserNameAsync() {
  yield takeEvery("GET_SEARCH_REPOS_BY_USER_NAME", getReposByUserName);
}

export default function* () {
  yield all([fork(getReposByUserNameAsync)]);
}
