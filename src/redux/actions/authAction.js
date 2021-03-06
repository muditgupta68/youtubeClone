import auth from "../../firebase";
import firebase from "firebase/compat/app";

export const userLogin = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const res = await auth.signInWithPopup(provider);
    // console.log(res);
    sessionStorage.setItem("ytb_at", JSON.stringify(res));

    const LOGIN = {
      type: "LOGIN_SUCCESS",
      payload: res,
    };

    dispatch(LOGIN);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "LOGIN_FAIL",
      payload: error.message,
    });
    alert("FAIL!");
  }
};
export const userLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT",
    });
  } catch (error) {
    console.log(error.message);
    alert("ERROR!");
  }
};
