import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogout } from "../../redux/actions/authAction";

const Sidebar = ({ toggle, Sidebar }) => {
  const dispatch = useDispatch();
  const navigate = useHistory();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate.push("/login");
  };

  return (
    <div>
      <nav className={Sidebar ? "sidebar open" : "sidebar"}>
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>

        <li>
          <MdThumbUp size={23} />
          <span>Liked Video</span>
        </li>

        <li>
          <MdHistory size={23} />
          <span>History</span>
        </li>

        <li>
          <MdLibraryBooks size={23} />
          <span>Library</span>
        </li>

        <hr />

        <li onClick={handleLogout}>
          <MdExitToApp size={23} />
          <span>Log Out</span>
        </li>

        <hr />
      </nav>
    </div>
  );
};

export default Sidebar;
