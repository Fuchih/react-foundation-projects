import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFail,
} from './fetchQuizSlice'
import { getQuiz } from './api'

function* fetchData({ payload }) {
  try {
    const response = yield call(getQuiz, payload)
    const { results } = response.data
    yield put(fetchDataSuccess(results))
  } catch (error) {
    yield put(fetchDataFail(error))
  }
}

function* watchFetchSaga() {
  yield takeLatest(fetchDataStart, fetchData)
}

const saga = [fork(watchFetchSaga)]

export default function* rootSaga() {
  yield all([...saga])
}
