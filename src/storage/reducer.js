import { LOGIN ,SIGNOUT, UPDATEPROFILE , UPDATECATEGORIES,} from "./constants";

const initialState = {
    isLoggedIn: false,
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    profileImage: '',
    categories: [],
};
export const VogueKartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                userId :action.payload.userId,
                firstName :action.payload.firstName,
                lastName :action.payload.lastName,
                email :action.payload.email,
                mobileNumber :action.payload.mobileNumber,
                profileImage :action.payload.profileImage,
                isLoggedIn: true,
            };
            case SIGNOUT:
            return{
                ...state,
                userId: '',
                firstName: '',
                lastName: '',
                email: '',
                mobileNumber: '',
                profileImage: '',
                isLoggedIn: false,
            };
            case UPDATEPROFILE:
            return{
                ...state,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                email:action.payload.email,
                mobileNumber:action.payload.mobileNumber,
                profileImage:action.payload.profileImage,
            };
            case UPDATECATEGORIES:
            return{
                ...state,
                categories: [...action.payload.categories],
            };
        default:
            return state;
    };
};