const initial = {
  login: sessionStorage.getItem("ytb_at")
    ? JSON.parse(sessionStorage.getItem("ytb_at"))
    : null,
  error: null,
  loading: true,
};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, login: action.payload, loading: false };
    case "LOGOUT":
      sessionStorage.removeItem("ytb_at");
      return { ...state, login: null, loading: false };
    case "LOGIN_REQUEST":
      return { ...state, loading: false };
    case "LOGIN_FAIL":
      return { ...state, login: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
