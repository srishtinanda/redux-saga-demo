import { Types } from '../actions/users'

const InitialState = {
    list: []
} 

export default function users(state = InitialState, action) {
    switch(action.type) {
        case Types.GET_USERS_REQUEST: {
            return { 
                ...state,
                // list: action.payload.list
            }
        }
        default: 
            return state
    }
}