import { all, fork } from 'redux-saga/effects';
import { watchGetData } from './swApi/saga';

export default function* () {
    yield all([
        fork(watchGetData)
    ]);
}
