import React from "react";
import PropTypes from "prop-types";

const ItemNavbar = ({texto}) => {
  return (
    <>
      <li className="p-4 border-b-2 border-red-600 border-opacity-0 hover:border-opacity-100 hover:text-red-600 duration-200 cursor-pointer">
        <a href="">{texto}</a>
      </li>
    </>
  );
};

ItemNavbar.propTypes = {
    texto:PropTypes.string,
};

export default ItemNavbar;
