import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdOutlineApps } from "react-icons/md";

const Header = ({ toggle }) => {
  return (
    <div className="header">
      <div className="header__logos">
        <FaBars className="header__menu" size={20} onClick={() => toggle()} />

        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
          className="header__logo"
        />
      </div>
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdOutlineApps size={28} />
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt="avatar.png"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
