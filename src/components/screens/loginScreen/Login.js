import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../redux/actions/authAction";
import "./_login.scss";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const accessToken = useSelector(
    (state) => state?.userReducer?.login?.credential?.accessToken
  );

  const handleLoginGoogle = () => {
    dispatch(userLogin());
  };

  useEffect(() => {
    if (accessToken) {
      navigate.push("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <h2>Youtube Clone</h2>
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLoginGoogle}>Login With google</button>
        <p>This Project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default Login;
