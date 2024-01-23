import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Image = ({ item }) => {
  const { image, name } = item;
  return (
    <>
      <img src={image} alt="image" />
      <div className="content">
        <div className="header">
          <FaHeart className="icon" />
          <FaPlus className="icon" />
        </div>
        <div className="profile-container">
          <div className="profile-img">
            <FaUserAlt className="icon user-icon" />
            <p className="user">{name}</p>
          </div>
          <IoDownloadOutline className="icon" />
        </div>
      </div>
    </>
  );
};

export default Image;
