export const Types = {
    GET_USERS_REQUEST:'GET_USERS_REQUEST',
    GET_USERS_SUCCESS:'GET_USERS_SUCCESS'
}

export const getUsers = () => ({
    type: Types.GET_USERS_REQUEST,
})

export const getUsersList = ({list}) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        list
    }
})
