import { FaClone } from "react-icons/fa";
import Icons from "..";

const ClipBoard = ({ className = "" }) => {
  return (
    <Icons className={`${className}`}>
      <FaClone />
    </Icons>
  );
};

export default ClipBoard;
