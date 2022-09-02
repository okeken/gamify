import { FaTwitter } from "react-icons/fa";
import Icons from "..";

const Twitter = ({ className = "" }) => {
  return (
    <Icons className={`${className}`}>
      <FaTwitter />
    </Icons>
  );
};

export default Twitter;
