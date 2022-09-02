import { FaDiscord } from "react-icons/fa";
import Icons from "..";

const Discord = ({ className = "" }) => {
  return (
    <Icons className={`${className}`}>
      <FaDiscord />
    </Icons>
  );
};

export default Discord;
