import { FaEnvelopeOpen } from "react-icons/fa";
import Icons from "..";

const Envelope = ({className=''})=> {
    return (<Icons className={`${className}`}>
        <FaEnvelopeOpen />
        </Icons>)
}


export default Envelope;