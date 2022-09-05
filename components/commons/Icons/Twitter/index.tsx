import { FaTwitter } from "react-icons/fa";
import Icons from "..";

const Twitter = ({ className = "", url='' }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
    <Icons className={`${className}`}>
      <FaTwitter />
    </Icons>
      </a>
  );
};

export default Twitter;
