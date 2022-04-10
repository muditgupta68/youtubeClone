import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import Sidebar from "./components/sidebar/Sidebar";
import Homescreen from "./components/screens/homescreen/Homescreen";
import "./sass/_app.scss";
import { useEffect, useState } from "react";
import Login from "./components/screens/loginScreen/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Layout = ({ data }) => {
  const [SideBar, setSideBar] = useState(false);

  const toggle = () => {
    setSideBar(!SideBar);
    console.log(SideBar);
  };

  return (
    <>
      <Header toggle={toggle} />
      <div className="app__container">
        <Sidebar toggle={toggle} Sidebar={SideBar} />
        <Container fluid className="main__app">
          {data}
        </Container>
      </div>
    </>
  );
};

function App() {
  const navigate = useHistory();
  const accessToken = useSelector(
    (state) => state?.userReducer?.login?.credential?.accessToken
  );
  const loading = useSelector((state) => state?.userReducer?.login?.loading);

  useEffect(() => {
    if (!accessToken && !loading) {
      navigate.push("/login");
    }
  }, [accessToken, navigate, loading]);

  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/">
          <Layout data={<Homescreen />} />
        </Route>
        <Route>
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
