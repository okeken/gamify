import React from 'react'
import { FaDiscord } from "react-icons/fa";
import Icons from "..";

const Discord = ({ className = "", url='' }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
    <Icons className={`${className}`}>
      <FaDiscord />
    </Icons>
      </a>
  );
};

export default React.memo(Discord);
