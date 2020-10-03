import { call, put, takeLatest } from 'redux-saga/effects';
import fetchService from '../../utils/fetchService';
import { CHARACTERS, CHARACTERS_ASYNC } from './action-types';

function* getDataAsync({ payload }: any) {
//    const response = yield call(fetchService, 'https://jsonplaceholder.typicode.com/todos/2'); 
    try {
       
       const response = yield call(fetchService, 'https://swapi.dev/api/people');
       


//        console.log('response:' , response.results[0].name)
//       console.log('response2: ', response.result[1])
//       console.log('resultado3:' , response.results.length, response.results.name[0])
       yield put({
            type: CHARACTERS_ASYNC,
            payload: { characters: response.results }
        });

    } catch(error) {
        console.log(error);
    }
}

export function* watchGetData() {
    yield takeLatest(CHARACTERS, getDataAsync);
}
//for(let i = 0; i < names.length; i++) {
//    console.log(names[i]);
//};