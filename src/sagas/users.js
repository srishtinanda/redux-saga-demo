import { takeEvery, call, fork } from 'redux-saga/effects'
import * as actions from '../actions/users'
import { getUsersApiCall } from '../api/users'

function* getUsers () {
    try{
        const result = yield call(getUsersApiCall) 
        console.log(result)
    } catch(e){

    }
}
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}
const UsersSaga = [
    fork(watchGetUsersRequest)
]

export default UsersSaga