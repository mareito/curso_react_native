import { AuthState } from "./AuthContext";


type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'logout' }
    | { type: 'changeUserName', payload: string }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'No-username-yet'
            }
        case 'changeFavIcon':
            return {
                ...state,
                favouriteIcon: action.payload
            }

        case 'changeUserName':
            return {
                ...state,
                userName: action.payload
            }
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favouriteIcon: undefined
            }
        default:
            return state;
    }
}
