import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Image from "./Image";

const ImageComponent = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const show = (items) => {
    setSelectedItem(items);
  };
  return (
    <>
      {data.map((items) => {
        return (
          <div
            className="image-container"
            key={items.id}
            onClick={() => show(items)}
          >
            <Image item={items} />
          </div>
        );
      })}
      {selectedItem && (
        <div className="overlay" onClick={() => setSelectedItem(null)}>
          <div className="overlay-img">
            <img src={selectedItem.image} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageComponent;
