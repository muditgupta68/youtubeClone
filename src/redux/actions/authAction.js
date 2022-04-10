import auth from "../../firebase";
import firebase from "firebase/compat/app";

export const userLogin = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    console.log(res);

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
