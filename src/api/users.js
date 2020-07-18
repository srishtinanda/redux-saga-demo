import axios from 'axios'

export const getUsersApiCall = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
        }
    )
}