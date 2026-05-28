import { FaChevronDown } from "react-icons/fa";
import "..//styles/scroll.css";

function ScrollDown(){
    const descerTela = () =>{
        window.scrollTo ({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };
    return (
        <div className="scroll-down" onClick={descerTela}>
            <FaChevronDown />
        </div>
    );
}

export default ScrollDown;