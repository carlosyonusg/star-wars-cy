import { call, put, takeLatest } from 'redux-saga/effects';
import fetchService from '../../utils/fetchService';
import { LOGIN, LOGIN_ASYNC } from './action-types';

function* loginAsync({ payload }: any) {
//    const response = yield call(fetchService, 'https://jsonplaceholder.typicode.com/todos/2'); 
    try {
       
       const response = yield call(fetchService, 'https://swapi.dev/api/people/1');
       


//         console.log('response:' , response)
//       console.log('response2: ', response.result[1])
//       console.log('resultado3:' , response.results.length, response.results.name[0])
       yield put({
            type: LOGIN_ASYNC,
            payload: { user: response, isAuth: true }
        });

    } catch(error) {
        console.log(error);
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN, loginAsync);
}
//for(let i = 0; i < names.length; i++) {
//    console.log(names[i]);
//};