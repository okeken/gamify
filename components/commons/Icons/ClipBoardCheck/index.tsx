import React from 'react'
import { FaClipboardCheck } from "react-icons/fa";
import Icons from "..";

const ClipBoardCheck = ({ className = "" }) => {
  return (
    <Icons className={`${className}`}>
      <FaClipboardCheck />
    </Icons>
  );
};

export default React.memo(ClipBoardCheck);
