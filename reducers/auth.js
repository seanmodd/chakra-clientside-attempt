let userState;
// ! CHANGED THE BOTTOM FOR NEXTJS NEED TO SHOW RYAN
// if (window.localStorage.getItem("auth")) {

// if (process.browser.localStorage.getItem("auth")) {
//   userState = JSON.parse(window.localStorage.getItem("auth"));
// } else {
//   userState = null; // {}
// }

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
