let userState;
// ! BELOW IS THE ORIGINAL VERSION FROM THE CREATE-REACT-APP
// if (window.localStorage.getItem('auth')) {
//! BELOW IS THE NEW VERSION WITH THE TIP FROM STACKOVERFLOW
if (typeof window !== 'undefined') {
  userState = JSON.parse(window.localStorage.getItem('auth'));
} else {
  userState = {}; // {}
}

export const authReducer = (state = userState, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return action.payload;
    default:
      return state;
  }
};
